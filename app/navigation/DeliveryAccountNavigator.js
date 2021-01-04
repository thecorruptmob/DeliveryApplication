import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContactUsScreen from "../screens/ContactUsScreen";

import HelpScreen from "../screens/HelpScreen";
import DeliveryAccountScreen from "../screens/DeliveryAccountScreen";

const Stack = createStackNavigator();

const DeliveryAccountNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={DeliveryAccountScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Contact Us" component={ContactUsScreen} />
  </Stack.Navigator>
);

export default DeliveryAccountNavigator;
