import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import { Button } from "native-base";
import Text from "./Text";
import colors from "../config/colors";

function ItemCard({ title, subTitle, imageUrl, onPress, onButtonPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" source={imageUrl} />
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={onButtonPress}>
              <Text style={styles.buttonText}>Add</Text>
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    position: "absolute",
    right: 5,
    bottom: 5,
    padding: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    padding: 5,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    borderBottomWidth: 0.25,
    borderBottomColor: colors.light,
    borderTopWidth: 0.25,
    borderTopColor: colors.light,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  subTitleContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flex: 1,
    width: 140,
  },
  title: {
    marginBottom: 7,
    fontSize: 18,
  },
  titleContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    flex: 1,
  },
});
