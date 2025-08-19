import React, { useEffect, useState } from "react";
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userApi.js";
import UserForm from "../Components/UserForm.jsx";
import ListaUser from "../Components/ListaUser.jsx";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const cargarUser = () => {
    getAllUser()
      .then((res) => setUser(res.data.data))
      .catch(console.error);
  };

  const handleUser = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para acceder");
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        user: payload.user,
      };
    } catch (e) {
      console.error("No se encontro usuario", e);
      return null;
    }
  };

  useEffect(() => {
    const user = handleUser();
    setUserData(user);
    cargarUser();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    cargarUser();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleFormSubmit = async (data) => {
    if (editingUser) {
      await updateUser(editingUser.idUser, data);
    } else {
      await createUser(data);
    }
    setEditingUser(null);
    cargarUser();
  };

  return (
    <div className="p-1 space-y-6">
      <h1 className="text-2xl font-bold">
        {userData ? `${userData.user}` : "User"}
      </h1>
      <UserForm onSubmit={handleFormSubmit} initialData={editingUser} />
      <ListaUser user={user} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default User;
