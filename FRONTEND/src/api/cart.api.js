import api from "axios";

export const getCart = () => api.get("/api/cart/");
export const addToCart = (productId) =>
api.post("/api/cart/add/", { product_id: productId });