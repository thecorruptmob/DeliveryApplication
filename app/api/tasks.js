import client from "./client";

const endpoint = "/order/getOrders";

const getTasks = () => client.get(endpoint);

export default {
  getTasks,
};
