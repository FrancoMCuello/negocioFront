import React, { useEffect, useState } from "react";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from "../api/serviceApi.js";
import ListaServicios from "../Components/ListaServicios.jsx";
import ServiceForm from "../Components/ServiceForm.jsx";
import LogoutButton from "../Components/LogoutButton.jsx";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [editingServicie, setEditingService] = useState(null);

  const cargarServicios = () => {
    getAllServices()
      .then((res) => setServicios(res.data.data))
      .catch(console.error);
  };

  useEffect(() => {
    cargarServicios();
  }, []);

  const handleDelete = async (id) => {
    await deleteService(id);
    cargarServicios();
  };

  const handleEdit = (service) => {
    setEditingService(service);
  };

  const handleFormSubmit = async (data) => {
    if (editingServicie) {
      await updateService(editingServicie.idservice, data);
    } else {
      await createService(data);
    }
    setEditingService(null);
    cargarServicios();
  };

  return (
    <>
      <h1>Servicios</h1>
      <ServiceForm onSubmit={handleFormSubmit} initialData={editingServicie} />
      <ListaServicios
        servicios={servicios}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Servicios;
