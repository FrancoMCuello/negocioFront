import React, { useEffect, useState } from "react";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from "../api/serviceApi.js";
import ListaServicios from "../Components/servicios/ListaServicios.jsx";
import ServiceForm from "../Components/servicios/ServiceForm.jsx";

const Servicios = () => {
  const [userData, setUserData] = useState(null);
  const [servicios, setServicios] = useState([]);
  const [editingServicie, setEditingService] = useState(null);

  const cargarServicios = () => {
    getAllServices()
      .then((res) => setServicios(res.data.data))
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
    <div className="p-1 space-y-6">
      <h1 className="text-2xl font-bold">
        {userData ? `Servicios de ${userData.user}` : "Servicios"}
      </h1>
      <ServiceForm onSubmit={handleFormSubmit} initialData={editingServicie} />
      <ListaServicios
        servicios={servicios}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Servicios;
