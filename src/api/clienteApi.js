import axios from "axios";

const API_URL = "http://localhost:3000/api/clientes";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllClientes = () => axios.get(API_URL, getAuthHeader());
export const getClienteById = (term) =>
  axios.get(`${API_URL}?search=${term}`, getAuthHeader());
export const createCliente = (data) =>
  axios.post(API_URL, data, getAuthHeader());
export const updateCliente = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, getAuthHeader());
export const deleteCliente = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeader());
