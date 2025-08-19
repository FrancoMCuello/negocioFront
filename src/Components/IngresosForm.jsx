import React, { useEffect, useState } from "react";
import { Save } from "lucide-react";

const IngresosForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    concepto: "",
    fecha: "",
    monto: "",
    idservice: "",
    User_idUser: "",
    idClientes: "",
  });

  const handleUser = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para acceder");
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        idUser: payload.userId,
        user: payload.user,
      };
    } catch (e) {
      console.error("No se encontro usuario", e);
      return null;
    }
  };

  useEffect(() => {
    const user = handleUser();
    if (user) {
      setFormData((prev) => ({
        ...prev,
        User_idUser: user.idUser,
      }));
    }
    if (initialData) {
      setFormData((prev) => ({
        ...initialData,
        User_idUser: user ? user.idUser : "",
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      concepto: "",
      fecha: "",
      monto: "",
      User_idUser: formData.User_idUser,
      idservice: "",
      idClientes: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4 max-w-2x1 mx-auto"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        {initialData ? "Editar Ingreso" : "Nuevo Ingreso"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="concepto"
          placeholder="Concepto"
          value={formData.concepto}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          name="fecha"
          type="date"
          value={formData.fecha}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="monto"
          placeholder="Monto"
          type="number"
          value={formData.monto}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          name="idservice"
          placeholder="ID Servicio"
          value={formData.idservice}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          name="idClientes"
          placeholder="ID Clientes"
          value={formData.idClientes}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
      >
        <Save size={16} />
        Guardar
      </button>
    </form>
  );
};
export default IngresosForm;
