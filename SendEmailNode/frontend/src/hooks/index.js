import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_REACT_API_URL });

export const useApi = () => ({
  send: async (values) => {
    const res = await api.post("/", values);
    if (res.data.message === "email enviado") {
      return true;
    } else {
      return false;
    }
  },
});
