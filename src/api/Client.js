import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const backend = {
  saveName: (text) => api.post("/save", { text }).then((r) => r.data),
};
