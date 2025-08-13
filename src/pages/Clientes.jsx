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
import LogoutButton from "../Components/LogoutButton.jsx";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [editingCliente, setEditingCliente] = useState(null);

  const cargarClientes = () => {
    getAllClientes()
      .then((res) => setClientes(res.data.data))
      .catch(console.error);
  };

  useEffect(() => {
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
    <>
      <h1>Clientes</h1>
      <ClientesForm onSubmit={handleFormSubmit} initialData={editingCliente} />
      <ListaClientes
        clientes={clientes}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Clientes;
