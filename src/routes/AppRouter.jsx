import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Servicios from "../pages/Servicios";
import Clientes from "../pages/Clientes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
