import axios from "axios";

const API_URL = "http://localhost:3000/api/ingresos";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllIngresos = () => axios.get(API_URL, getAuthHeader());
export const getIngresoById = (term) =>
  axios.get(`${API_URL}?search=${term}`, getAuthHeader());
export const createIngreso = (data) =>
  axios.post(API_URL, data, getAuthHeader());
export const updateIngreso = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, getAuthHeader());
export const deleteIngreso = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeader());
