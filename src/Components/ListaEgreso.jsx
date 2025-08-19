// src/components/ListaEgresos.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ListaEgresos = ({ egresos, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">Concepto</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Monto</th>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {egresos.map((e) => (
            <tr
              key={e.idEgresos}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{e.concepto}</td>
              <td className="px-4 py-2 font-medium text-red-600">${e.monto}</td>
              <td className="px-4 py-2">
                {new Date(e.fecha).toLocaleDateString()}
              </td>
              <td className="px-4 py-2">{e.User?.user}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(e)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(e.idEgresos)}
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

export default ListaEgresos;
