import React, { useEffect, useState } from "react";
import axios from "axios";

const ClienteForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    user: "",
    nombre: "",
    apellido: "",
    email: "",
    User_idUser: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      user: "",
      nombre: "",
      apellido: "",
      email: "",
      User_idUser: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="user"
        placeholder="Usuario"
        value={formData.user}
        onChange={handleChange}
        required
      />
      <input
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="User_idUser"
        placeholder="ID Usuario"
        value={formData.User_idUser}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
export default ClienteForm;
