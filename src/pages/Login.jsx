import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password
            });

            //Guardar el token en localStorage
            localStorage.setItem("token", res.data.token);
            alert("Login exitoso");

            //Redireccionar o cambiar de estado
            window.location.href = "/servicios";

        } catch (error) {
            alert("Error al iniciar sesión: " + error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
        </form>
    )
};

export default Login; 