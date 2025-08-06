// src/components/ListaClientes.jsx
import React from "react";

const ListaClientes = ({ clientes, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Usuario Service </th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((c) => (
          <tr key={c.idClientes}>
            <td>{c.nombre}</td>
            <td>{c.apellido}</td>
            <td>{c.email}</td>
            <td>{c.User?.user}</td>
            <td>
              <button onClick={() => onEdit(c)}>Editar</button>
              <button onClick={() => onDelete(c.idClientes)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaClientes;
