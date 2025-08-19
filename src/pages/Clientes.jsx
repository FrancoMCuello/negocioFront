import React, { useEffect, useState } from "react";
import {
  getAllClientes,
  /*  getClienteById, */
  createCliente,
  updateCliente,
  deleteCliente,
} from "../api/clienteApi.js";
import ListaClientes from "../Components/ListaClientes.jsx";
import ClientesForm from "../Components/ClientesForm.jsx";

const Clientes = () => {
  const [userData, setUserData] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [editingCliente, setEditingCliente] = useState(null);

  const cargarClientes = () => {
    getAllClientes()
      .then((res) => setClientes(res.data.data))
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
    cargarClientes();
  }, []);

  const handleDelete = async (id) => {
    await deleteCliente(id);
    cargarClientes();
  };

  const handleEdit = (clientes) => {
    setEditingCliente(clientes);
  };

  const handleFormSubmit = async (data) => {
    if (editingCliente) {
      await updateCliente(editingCliente.idClientes, data);
    } else {
      await createCliente(data);
    }
    setEditingCliente(null);
    cargarClientes();
  };

  return (
    <div className="p-1 space-y-6">
      <h1 className="text-2xl font-bold">
        {userData ? `Clientes de ${userData.user}` : "Clientes"}
      </h1>
      <ClientesForm onSubmit={handleFormSubmit} initialData={editingCliente} />
      <ListaClientes
        clientes={clientes}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Clientes;
