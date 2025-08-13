import axios from "axios";

const API_URL = "http://localhost:3000/api/egresos";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllEgresos = () => axios.get(API_URL, getAuthHeader());
export const getEgresoById = (term) =>
  axios.get(`${API_URL}?search=${term}`, getAuthHeader());
export const createEgreso = (data) =>
  axios.post(API_URL, data, getAuthHeader());
export const updateEgreso = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, getAuthHeader());
export const deleteEgreso = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeader());
