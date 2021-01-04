import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import OrderItems from "../components/OrderItems";
import colors from "../config/colors";
import Screen from "../components/Screen";

function OrderDetailsScreen({ route }) {
  const data = route.params;
  console.log("This is order details", data);

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(data) => data._id}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <OrderItems
                title={item.productName}
                subTitle={item.price}
                imageUrl={item.image}
                quantity={item.quantity}
                companyName={item.companyName}
                type={item.type}
              />
            </View>
          )}
        />
      </View>
    </Screen>
  );
}

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
});
