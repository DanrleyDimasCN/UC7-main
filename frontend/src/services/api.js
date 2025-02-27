import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // Altere para o URL do seu back-end
});

export default api;
