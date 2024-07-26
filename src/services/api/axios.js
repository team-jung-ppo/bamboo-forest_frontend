import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_WAS_URL,
  withCredentials: true
})

export default client;