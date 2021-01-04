import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>One Stop Shop Experience</Text>
          <Text style={styles.indetifierLine}>
            Delivery Professional Application
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
    color: colors.dark,
  },
  indetifierLine: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
    color: colors.primary,
  },
});

export default WelcomeScreen;
