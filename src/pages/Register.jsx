import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email,
          password,
        }
      );

      //Guardar el token si el backend lo retorna
      const token = response.data.token;
      localStorage.setItem("token", token);

      setMensaje("Registo Exitoso. Redirigiendo...");
      setEmail("");
      setPassword("");

      //Redirigir
      setTimeout(() => {
        window.location.href = "/servicios"; // Cambiar por la ruta deseada
      }, 2000);
    } catch (error) {
      console.error("Error al registrar:", error);
      setMensaje("Ocurrió un error durante el registro.");
    }
  };

  return (
    <>
      <h2>Registro de Usuario</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default RegisterForm;
