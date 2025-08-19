import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          user,
          email,
          password,
        }
      );

      //Guardar el token si el backend lo retorna
      const token = response.data.token;
      localStorage.setItem("token", token);

      setMensaje("Registo Exitoso. Redirigiendo...");
      setUser("");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registro</h1>
        {mensaje && <p>{mensaje}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label>Usuario:</label>

          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
          <label className="w-full focus:ring focus:ring-blue-300">
            Email:
          </label>

          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
