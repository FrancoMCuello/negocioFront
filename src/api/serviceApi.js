import axios from "axios";

const API_URL = "http://localhost:3000/api/service";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllServices = () => axios.get(API_URL, getAuthHeader());
export const getServiceById = (term) =>
  axios.get(`${API_URL}?search=${term}`, getAuthHeader());
export const createService = (data) =>
  axios.post(API_URL, data, getAuthHeader());
export const updateService = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, getAuthHeader());
export const deleteService = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeader());
