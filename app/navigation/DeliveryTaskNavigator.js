import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DeliveryTaskScreen from "../screens/DeliveryTaskScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createStackNavigator();

const DeliveryTaskNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Delivery Task" component={DeliveryTaskScreen} />
    <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
  </Stack.Navigator>
);

export default DeliveryTaskNavigator;
