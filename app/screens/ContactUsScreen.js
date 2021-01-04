import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { contact } from "../hardcode/data";
import colors from "../config/colors";
import InformationCard from "../components/InformationCard";
import Screen from "../components/Screen";

function ContactUsScreen() {
  const location = {
    latitude: 31.46781706401446,
    latitudeDelta: 0.01110209602199319,
    longitude: 74.26664656028152,
    longitudeDelta: 0.010413341224179362,
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 31.467781808149816,
            latitudeDelta: 0.0100010162462069487265,
            longitude: 74.26662543788552,
            longitudeDelta: 0.01000101991770446300507,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {<Marker coordinate={location} title="SuperMart" />}
        </MapView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={contact}
          keyExtractor={(contact) => contact.id}
          renderItem={({ item }) => (
            <InformationCard title={item.title} subTitle={item.body} />
          )}
        />
      </View>
    </Screen>
  );
}

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  map: {
    width: "100%",
    height: 300,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
});
