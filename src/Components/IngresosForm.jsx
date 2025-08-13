import React, { useEffect, useState } from "react";

const IngresosForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    concepto: "",
    fecha: "",
    monto: "",
    idservice: "",
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
      concepto: "",
      fecha: "",
      monto: "",
      User_idUser: "",
      idservice: "",
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
        name="fecha"
        type="date"
        value={formData.fecha}
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
        name="User_idUser"
        placeholder="ID Usuario"
        value={formData.User_idUser}
        onChange={handleChange}
        required
      />
      <input
        name="idservice"
        placeholder="ID Service"
        value={formData.idservice}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
export default IngresosForm;
