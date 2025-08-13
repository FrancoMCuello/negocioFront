import { Navigate } from "react-router-dom";

export default function AdminRouter({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Debes iniciar sesión para acceder");
    return <Navigate to="/login" />;
  }

  let role = null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    role = payload.role;
  } catch (e) {
    console.error("Error decodificando token:", e);
    return <Navigate to="/login" />;
  }
  if (role !== "admin") {
    alert("Acceso denegado: Se requiere ser administrador");
    return <Navigate to="/servicios" alert="solo para admin" />;
  }
  return children;
}
