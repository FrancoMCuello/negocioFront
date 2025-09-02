// src/components/ListaIngresos.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ListaIngresos = ({ ingresos, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">Concepto</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Monto</th>
            <th className="px-4 py-2">Usuario Vendedor</th>
            <th className="px-4 py-2">Servicio Contratado</th>
            <th className="px-4 py-2">Cliente</th>
            <th className="px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ingresos.map((i) => (
            <tr
              key={i.idIngresos}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{i.concepto}</td>
              <td className="px-4 py-2">
                {new Date(i.fecha).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 font-medium text-green-600">
                ${i.monto}
              </td>
              <td className="px-4 py-2">{i.User?.user}</td>
              <td className="px-4 py-2">{i.service?.service}</td>
              <td className="px-4 py-2">{i.cliente?.nombre}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(i)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(i.idIngresos)}
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

export default ListaIngresos;
