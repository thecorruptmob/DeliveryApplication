import client from "./client";

const login = (phone, password) =>
  client.post("/customer/signin", { phone, password });

export default {
  login,
};
