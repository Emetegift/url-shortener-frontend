import React from "react";
import { Logout } from "./logout";

const LogoutButton = () => {
  const handleLogout = () => {
    Logout();
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
