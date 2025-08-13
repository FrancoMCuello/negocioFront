import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="m-4 p-2 bg-red-600 rounded hover:bg-red-700"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
