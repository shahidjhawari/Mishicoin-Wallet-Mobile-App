import axios from "axios";

const API = axios.create({
  baseURL: "https://mishicoin-mobile-app-backend.vercel.app/api",
});

export default API;