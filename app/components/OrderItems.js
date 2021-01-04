import React from "react";
import { View, StyleSheet } from "react-native";

import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";

function OrderItems({
  title,
  subTitle,
  imageUrl,
  companyName,
  quantity,
  type,
}) {
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Name: {title}
          </Text>
          <Text style={styles.companyNameContainer}>
            Company: {companyName}
          </Text>
          <Text>Price: {subTitle}</Text>
          <Text>Type: {type}</Text>
          <Text>Quantity: {quantity}</Text>
        </View>
      </View>
    </View>
  );
}

export default OrderItems;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    borderTopWidth: 0.5,
    borderTopColor: colors.light,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 145,
    height: 145,
    resizeMode: "contain",
  },
});
