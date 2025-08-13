import axios from "axios";

const API_URL = "http://localhost:3000/api/user";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllUser = () => axios.get(API_URL, getAuthHeader());
export const getUserById = (term) =>
  axios.get(`${API_URL}?search=${term}`, getAuthHeader());
export const createUser = (data) => axios.post(API_URL, data, getAuthHeader());
export const updateUser = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, getAuthHeader());
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeader());
