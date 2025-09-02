import React, { useEffect, useState } from "react";
import { Save } from "lucide-react";

const ClienteForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    nombre: "",
    apellido: "",
    User_idUser: "",
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
        userId: payload.userId,
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
        User_idUser: user.userId,
      }));
    }
    if (initialData) {
      setFormData((prev) => ({
        ...initialData,
        User_idUser: user ? user.userId : "",
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
      user: "",
      email: "",
      nombre: "",
      apellido: "",
      User_idUser: formData.User_idUser,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4 max-w-2x1 mx-auto"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        {initialData ? "Editar Cliente" : "Nuevo Cliente"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="user"
          placeholder="Usuario"
          value={formData.user}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* <input
        name="User_idUser"
        placeholder="ID Usuario"
        value={formData.User_idUser}
        onChange={handleChange}
        required
      /> */}
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
export default ClienteForm;
