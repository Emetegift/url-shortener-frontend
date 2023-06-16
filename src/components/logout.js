import React from "react";
// import axios from "axios";


// export const logout = () => {

//       localStorage.removeItem("accessToken");
//       window.location.href = "/";
//         setTimeout(() => {
//           window.location.reload();             
//         }, 1000);
// }





import axios from "axios";

export const Logout = async () => {
  try {
    await axios.delete("/logout");
    localStorage.removeItem("accessToken");
    window.location.href = "/";
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
