import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import Text from "./Text";
import Button from "./ButtonTask";

function DeliveryTaskCard({
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
  onButtonPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.card}>
          <Text style={styles.heading}>Information</Text>
          <Text style={styles.subtext}>Order Time: {orderTime}</Text>
          <Text style={styles.subtext}>Status: {status}</Text>
          <Text style={styles.subtext}>Total: {total}</Text>
          <Text style={styles.heading}>Store</Text>
          <Text style={styles.subtext}>Name: {storeName}</Text>
          <Text style={styles.subtext}>Phone: {storePhone}</Text>
          <Text style={styles.heading}>Customer</Text>
          <Text style={styles.subtext}>Name: {customerName}</Text>
          <Text style={styles.subtext}>Phone: {customerPhone}</Text>
          {/* <Text style={styles.subtext}>
          {customerLocation}
        </Text> */}
          <Text style={styles.subtext}>Address: {customerAddress}</Text>
          {/* <Text style={styles.heading}>Delivery</Text>
          <Text style={styles.subtext}>{deliveryWorkerName}</Text>
          <Text style={styles.subtext}>{deliveryWorkerPhone}</Text> */}
          {/*  <Text style={styles.subtext}>
          {storeLocation}
        </Text> */}
          <View style={styles.buttonContainer}>
            <Button title="Done" onPress={onButtonPress} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeliveryTaskCard;

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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
