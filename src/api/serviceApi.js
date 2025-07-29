import axios from "axios";

const API_URL = "http://localhost:3000/api/service";

export const getAllServices = () => axios.get(API_URL);
export const getServiceById = (term) => axios.get(`${API_URL}?search=${term}`);
export const createService = (data) => axios.post(API_URL, data);
export const updateService = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteService = (id) => axios.delete(`${API_URL}/${id}`);
