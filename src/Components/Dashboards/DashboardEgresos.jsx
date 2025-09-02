import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getAllEgresos } from "../../api/egresosApi";

export default function DashboardEgresos() {
  const [egresosData, setEgresosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [egresosRes] = await Promise.all([getAllEgresos()]);

        const egresosMes = egresosRes.data.data;

        //Lista de meses
        const meses = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ];

        //Agrupar por mes
        const egresosMensual = meses.map((mes, i) => {
          const egresos = egresosMes
            .filter((eg) => new Date(eg.fecha).getMonth() === i)
            .reduce((acc, eg) => acc + Number(eg.monto), 0);

          return { mes, egresos };
        });

        setEgresosData(egresosMensual);
      } catch (err) {
        console.error("Error al cargar datos:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <LineChart data={egresosData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="egresos"
            name="Egresos Mensuales"
            stroke="#F44336"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
