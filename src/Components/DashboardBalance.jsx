import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getAllIngresos } from "../api/ingresosApi.js";
import { getAllEgresos } from "../api/egresosApi.js";

const DashboardBalance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ingresosRes, egresosRes] = await Promise.all([
          getAllIngresos(),
          getAllEgresos(),
        ]);

        const ingresos = ingresosRes.data.data;
        const egresos = egresosRes.data.data;

        console.log("Ingresos:", ingresosRes.data);
        console.log("Egresos:", egresosRes.data);

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
        const balances = meses.map((mes, i) => {
          const ingresosMes = ingresos
            .filter((ing) => new Date(ing.fecha).getMonth() === i)
            .reduce((acc, ing) => acc + Number(ing.monto), 0);

          const egresosMes = egresos
            .filter((eg) => new Date(eg.fecha).getMonth() === i)
            .reduce((acc, eg) => acc + Number(eg.monto), 0);

          return { mes, balance: ingresosMes - egresosMes };
        });

        setData(balances);
      } catch (err) {
        console.error("Error al cargar datos:", err);
      }
    };
    fetchData();
  }, []);

  //calcular gradiente dinamico
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.balance));
    const dataMin = Math.min(...data.map((i) => i.balance));
    if (dataMax <= 0) return 0;
    if (dataMin >= 0) return 1;
    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />

        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="balance"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardBalance;
