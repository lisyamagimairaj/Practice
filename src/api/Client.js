import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const backend = {
  saveName: (form) =>
    api.post("/StudentDetailPage/details", { form: form }).then((r) => r.data),
  saveContactName: (value1, value2) =>
    api
      .post("/Contact/save", { name: value1, Feedback: value2 })
      .then((r) => r.data),
};
