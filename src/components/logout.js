import React from "react";
import axios from "axios";


export const logout = () => {

      localStorage.removeItem("accessToken");
      window.location.href = "/";
        setTimeout(() => {
          window.location.reload();             
        }, 1000);
}