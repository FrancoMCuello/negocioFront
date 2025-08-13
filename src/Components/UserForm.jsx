import React, { useEffect, useState } from "react";

const UserForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
    role: "",
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
      email: "",
      password: "",
      role: "",
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
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
export default UserForm;
