// src/components/ListaServicios.jsx
import React from 'react';

const ListaServicios = ({ servicios, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Precio</th>
          <th>Cliente</th>
          <th>Usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {servicios.map((s) => (
          <tr key={s.idservice}>
            <td>{s.service}</td>
            <td>{new Date(s.fecha).toLocaleDateString()}</td>
            <td>${s.precio}</td>
            <td>{s.cliente?.nombre}</td>
            <td>{s.User?.user}</td>
            <td>
              <button onClick={() => onEdit(s)}>Editar</button>
              <button onClick={() => onDelete(s.idservice)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaServicios;
