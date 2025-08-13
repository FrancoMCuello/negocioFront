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
import LogoutButton from "../Components/LogoutButton.jsx";

const Ingresos = () => {
  const [ingresos, setIngresos] = useState([]);
  const [editingIngreso, setEditingIngreso] = useState(null);

  const cargarIngresos = () => {
    getAllIngresos()
      .then((res) => setIngresos(res.data.data))
      .catch(console.error);
  };

  useEffect(() => {
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
    <>
      <h1>Ingresos</h1>
      <IngresosForm onSubmit={handleFormSubmit} initialData={editingIngreso} />
      <ListaIngresos
        ingresos={ingresos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Ingresos;
