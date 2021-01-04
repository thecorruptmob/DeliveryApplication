import client from "./client";

const update = (orderId) => client.put("/order/orderdelivered/" + orderId);
export default { update };
