import React, { useEffect, useState } from "react";

const EgresosForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    concepto: "",
    monto: "",
    fecha: "",
    user_idUser: "",
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
      concepto: "",
      monto: "",
      fecha: "",
      user_idUser: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="concepto"
        placeholder="Concepto"
        value={formData.concepto}
        onChange={handleChange}
        required
      />
      <input
        name="monto"
        placeholder="Monto"
        type="number"
        value={formData.monto}
        onChange={handleChange}
        required
      />
      <input
        name="fecha"
        type="date"
        value={formData.fecha}
        onChange={handleChange}
        required
      />
      <input
        name="user_idUser"
        placeholder="ID Usuario"
        value={formData.user_idUser}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
export default EgresosForm;
