// src/components/ListaEgresos.jsx
import React from "react";

const ListaEgresos = ({ egresos, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Monto</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        {egresos.map((e) => (
          <tr key={e.idEgresos}>
            <td>{e.concepto}</td>
            <td>${e.monto}</td>
            <td>{new Date(e.fecha).toLocaleDateString()}</td>
            <td>{e.User?.user}</td>
            <td>
              <button onClick={() => onEdit(e)}>Editar</button>
              <button onClick={() => onDelete(e.idEgresos)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaEgresos;
