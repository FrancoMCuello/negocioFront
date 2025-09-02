// src/components/ListaServicios.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ListaServicios = ({ servicios, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">Servicio</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((s) => (
            <tr
              key={s.idservice}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{s.service}</td>
              <td className="px-4 py-2">{s.description}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(s)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(s.idservice)}
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

export default ListaServicios;
