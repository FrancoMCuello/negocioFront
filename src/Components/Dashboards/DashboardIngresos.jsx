import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { getAllIngresos } from "../../api/ingresosApi";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardIngresos() {
  const [clientesData, setClientesData] = useState([]);
  const [serviciosData, setServiciosData] = useState([]);

  useEffect(() => {
    getAllIngresos()
      .then((res) => {
        const ingresos = res.data.data;

        //agrupar por cliente
        const clienteMap = {};
        ingresos.forEach((ing) => {
          const clienteNombre = `${ing.cliente.nombre} ${ing.cliente.user}`;
          clienteMap[clienteNombre] =
            (clienteMap[clienteNombre] || 0) + parseFloat(ing.monto);
        });
        const clientesArrays = Object.entries(clienteMap).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        //agrupar por servicio
        const servicioMap = {};
        ingresos.forEach((ing) => {
          const servicioNombre = `${ing.service.service}`;
          servicioMap[servicioNombre] =
            (servicioMap[servicioNombre] || 0) + parseFloat(ing.monto);
        });
        const serviciosArray = Object.entries(servicioMap).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        setClientesData(clientesArrays);
        setServiciosData(serviciosArray);
      })
      .catch((err) => {
        console.error("Error al cargar los ingresos:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-80">
      <div>
        <h3 className="text-lg front-semibold mb-2"> Ingresos por Cliente</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={clientesData} dataKey="value" outerRadius={80} label>
              {clientesData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Ingresos por Servicio</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={serviciosData} dataKey="value" outerRadius={80} label>
              {serviciosData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
