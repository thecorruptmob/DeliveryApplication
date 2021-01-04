import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function OrderDetailsCard({
  customerName,
  customerPhone,
  customerLocation,
  customerAddress,
  deliveryWorkerName,
  deliveryWorkerPhone,
  storeName,
  storePhone,
  storeLocation,
  orderTime,
  status,
  onPress,
  total,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.card}>
          <Text style={styles.heading}>Information</Text>
          <Text style={styles.subtext}>Order Time: {orderTime}</Text>
          <Text style={styles.subtextStatus}>Status: {status}</Text>
          <Text style={styles.subtext}>Total: {total}</Text>
          {/* <Text style={styles.subtext}>
          {customerLocation}
        </Text> */}
          <Text style={styles.subtext}>Address: {customerAddress}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default OrderDetailsCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
    backgroundColor: colors.light,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.black,
  },
  subtext: {
    fontSize: 12,
  },
  subtextStatus: {
    fontSize: 12,
    color: colors.primary,
  },
});
