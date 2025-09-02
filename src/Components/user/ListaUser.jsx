// src/components/ListaUser.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ListaUser = ({ user, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => (
            <tr
              key={u.idUser}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{u.user}</td>
              <td className="px-4 py-2">{u.password}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.role}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(u)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(u.idUser)}
                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUser;
