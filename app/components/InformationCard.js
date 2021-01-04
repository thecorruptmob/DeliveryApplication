import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import Text from "./Text";

function InformationCard({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default InformationCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.light,
  },
  subTitle: {
    fontSize: 12,
    color: colors.medium,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
  },
});
