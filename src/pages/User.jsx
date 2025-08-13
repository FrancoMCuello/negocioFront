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
import LogoutButton from "../Components/LogoutButton.jsx";

const User = () => {
  const [user, setUser] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const cargarUser = () => {
    getAllUser()
      .then((res) => setUser(res.data.data))
      .catch(console.error);
  };

  useEffect(() => {
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
    <>
      <h1>User</h1>
      <UserForm onSubmit={handleFormSubmit} initialData={editingUser} />
      <ListaUser user={user} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};

export default User;
