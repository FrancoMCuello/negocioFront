import React, { useEffect, useState } from "react";
import {
  getAllEgresos,
  /* getEgresoById, */
  createEgreso,
  updateEgreso,
  deleteEgreso,
} from "../api/egresosApi.js";
import ListaEgresos from "../Components/ListaEgreso.jsx";
import EgresosForm from "../Components/EgresosForm.jsx";

const Egresos = () => {
  const [userData, setUserData] = useState(null);
  const [egresos, setEgresos] = useState([]);
  const [editingEgreso, setEditingEgreso] = useState(null);

  const cargarEgresos = () => {
    getAllEgresos()
      .then((res) => setEgresos(res.data.data))
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
    cargarEgresos();
  }, []);

  const handleDelete = async (id) => {
    await deleteEgreso(id);
    cargarEgresos();
  };

  const handleEdit = (egresos) => {
    setEditingEgreso(egresos);
  };

  const handleFormSubmit = async (data) => {
    if (editingEgreso) {
      await updateEgreso(editingEgreso.idEgresos, data);
    } else {
      await createEgreso(data);
    }
    setEditingEgreso(null);
    cargarEgresos();
  };

  return (
    <div className="p-1 space-y-6">
      <h1 className="text-2xl font-bold">
        {userData ? `Egresos de ${userData.user}` : "Egresos"}
      </h1>
      <EgresosForm onSubmit={handleFormSubmit} initialData={editingEgreso} />
      <ListaEgresos
        egresos={egresos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Egresos;
