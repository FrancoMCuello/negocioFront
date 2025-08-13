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
import LogoutButton from "../Components/LogoutButton.jsx";

const Egresos = () => {
  const [egresos, setEgresos] = useState([]);
  const [editingEgreso, setEditingEgreso] = useState(null);

  const cargarEgresos = () => {
    getAllEgresos()
      .then((res) => setEgresos(res.data.data))
      .catch(console.error);
  };

  useEffect(() => {
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
    <>
      <h1>Egresos</h1>
      <EgresosForm onSubmit={handleFormSubmit} initialData={editingEgreso} />
      <ListaEgresos
        egresos={egresos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Egresos;
