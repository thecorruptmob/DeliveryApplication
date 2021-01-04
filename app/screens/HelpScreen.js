import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/Text";
import colors from "../config/colors";

function HelpScreen() {
  return (
    <View style={styles.container}>
      <AppText>HelpScreen</AppText>
    </View>
  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
