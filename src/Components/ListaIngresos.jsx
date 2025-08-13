// src/components/ListaIngresos.jsx
import React from "react";

const ListaIngresos = ({ ingresos, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Monto</th>
          <th>Usuario</th>
          <th>Servicio Contratado</th>
        </tr>
      </thead>
      <tbody>
        {ingresos.map((i) => (
          <tr key={i.idIngresos}>
            <td>{i.concepto}</td>
            <td>{new Date(i.fecha).toLocaleDateString()}</td>
            <td>${i.monto}</td>
            <td>{i.User?.user}</td>
            <td>{i.service?.service}</td>
            <td>
              <button onClick={() => onEdit(i)}>Editar</button>
              <button onClick={() => onDelete(i.idIngresos)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaIngresos;
