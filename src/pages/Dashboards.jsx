import { useState } from "react";
import DashboardBalance from "../Components/Dashboards/DashboardBalance";
import DashboardIngresos from "../Components/Dashboards/DashboardIngresos";
import DashboardEgresos from "../Components/Dashboards/DashboardEgresos";

const dashboards = [
  { id: "balance", name: "Balance Mensual", component: <DashboardBalance /> },
  {
    id: "ingresos",
    name: "Ingresos de Usuarios",
    component: <DashboardIngresos />,
  },
  { id: "egresos", name: "Egresos", component: <DashboardEgresos /> },
];

export default function Dashboards() {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboards</h1>

      {/**Grid con miniaturas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dash) => (
          <div
            key={dash.id}
            className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedDashboard(dash)}
          >
            <div className="h-32 flex items-center justify-center text-gray-500">
              {/** Mini preview (puedes hacer un grafico pequeño o icono) */}
              <span>{dash.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/** Modal / vista expandida */}
      {selectedDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-2x1 shadow-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 relative">
            <button
              onClick={() => setSelectedDashboard(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {selectedDashboard.name}
            </h2>
            <div>{selectedDashboard.component}</div>
          </div>
        </div>
      )}
    </div>
  );
}
