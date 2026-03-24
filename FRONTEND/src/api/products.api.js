import api from "./axios";

export const getProducts = () => api.get("/api/products/");
export const getProductById = (id) => api.get(`/api/products/${id}/`);