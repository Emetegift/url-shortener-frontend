import axios from "axios";
import { BASE_URL } from "../utils/constant";

const api = axios.create();

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (
      error.response.status === 401 &&
      error.response.data.error === "token_expired"
    ) {
      try {
        const refreshResponse = await axios.post(
          `${BASE_URL}/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        const { access_token } = refreshResponse.data;
        localStorage.setItem("accessToken", access_token);
        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error(refreshError);
        // Handle refresh token error, e.g., redirect to login page or show an error message
        // You can also remove the tokens from local storage or secure cookie if needed
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // Redirect to login page
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;