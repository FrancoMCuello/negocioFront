import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      //Guardar el token en localStorage
      localStorage.setItem("token", res.data.token);
      //Decodificar Token
      const payload = JSON.parse(atob(res.data.token.split(".")[1]));
      /* localStorage.setItem("role", payload.role); */
      alert(`Login exitoso, rol: ${payload.role}`);

      //Redireccionar o cambiar de estado
      window.location.href = "/servicios";
    } catch (error) {
      alert(
        "Error al iniciar sesión: " + error.response?.data?.message ||
          error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold underline text-blue-600">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default Login;
