// src/components/ListaClientes.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ListaClientes = ({ clientes, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Usuario Service </th>
            <th className="px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr
              key={c.idClientes}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{c.nombre}</td>
              <td className="px-4 py-2">{c.apellido}</td>
              <td className="px-4 py-2">{c.email}</td>
              <td className="px-4 py-2">{c.User?.user}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(c)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(c.idClientes)}
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

export default ListaClientes;
