import React, { useEffect, useState } from "react";
import {
  getAllIngresos,
  /*   getIngresoById */
  createIngreso,
  updateIngreso,
  deleteIngreso,
} from "../api/ingresosApi.js";
import ListaIngresos from "../Components/ListaIngresos.jsx";
import IngresosForm from "../Components/IngresosForm.jsx";

const Ingresos = () => {
  const [userData, setUserData] = useState(null);
  const [ingresos, setIngresos] = useState([]);
  const [editingIngreso, setEditingIngreso] = useState(null);

  const cargarIngresos = () => {
    getAllIngresos()
      .then((res) => setIngresos(res.data.data))
      .catch(console.error);
  };

  const handleUser = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para acceder");
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        user: payload.user,
      };
    } catch (e) {
      console.error("No se encontro usuario", e);
      return null;
    }
  };

  useEffect(() => {
    const user = handleUser();
    setUserData(user);
    cargarIngresos();
  }, []);

  const handleDelete = async (id) => {
    await deleteIngreso(id);
    cargarIngresos();
  };

  const handleEdit = (ingresos) => {
    setEditingIngreso(ingresos);
  };

  const handleFormSubmit = async (data) => {
    if (editingIngreso) {
      await updateIngreso(editingIngreso.idIngresos, data);
    } else {
      await createIngreso(data);
    }
    setEditingIngreso(null);
    cargarIngresos();
  };

  return (
    <div className="p-1 space-y-6">
      <h1 className="text-2xl font-bold">
        {userData ? `Ingresos de ${userData.user}` : "Ingresos"}
      </h1>

      <IngresosForm onSubmit={handleFormSubmit} initialData={editingIngreso} />

      <ListaIngresos
        ingresos={ingresos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Ingresos;
