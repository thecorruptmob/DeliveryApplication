import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { about } from "../hardcode/data";
import colors from "../config/colors";
import InformationCard from "../components/InformationCard";
import Screen from "../components/Screen";

function AboutUsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={about}
        keyExtractor={(about) => about.id}
        renderItem={({ item }) => (
          <InformationCard title={item.title} subTitle={item.body} />
        )}
      />
    </Screen>
  );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
