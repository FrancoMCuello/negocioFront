// src/components/ListaUser.jsx
import React from "react";

const ListaUser = ({ user, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Password</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {user.map((u) => (
          <tr key={u.idUser}>
            <td>{u.user}</td>
            <td>{u.password}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>
              <button onClick={() => onEdit(u)}>Editar</button>
              <button onClick={() => onDelete(u.idUser)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaUser;
