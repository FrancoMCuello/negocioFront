import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Servicios from "../pages/Servicios";
import Clientes from "../pages/Clientes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Ingresos from "../pages/Ingresos";
import Egresos from "../pages/Egreso";
import User from "../pages/User";
import AdminRouter from "../Components/AdminRoute";
import LayoutBase from "../Components/LayoutBase";
import Home from "../pages/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      {/* Layout con sidebar y navbar */}
      <Route element={<LayoutBase />}>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/ingresos" element={<Ingresos />} />
        <Route path="/egresos" element={<Egresos />} />
        <Route
          path="/user"
          element={
            <AdminRouter>
              <User />
            </AdminRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
