import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Notifications } from "expo";

import DeliveryTaskCard from "../components/DeliveryTaskCard";
import tasksApi from "../api/tasks";
import updateApi from "../api/update";
import useApi from "../hooks/useApi";
import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import Screen from "../components/Screen";
import authStorage from "../auth/storage";

import io from "socket.io-client";
import { filter } from "lodash";

const socket = io(
  "https://evening-beach-81187.herokuapp.com/apis/order/socket"
);
function DeliveryTaskScreen() {
  const [user, setUser] = useState();

  var data = [];
  socket.on("orderUpdate", (orderUpdate) => {
    console.log("Hello", orderUpdate);
    data.push(orderUpdate);
  });
  const getTasksApi = useApi(tasksApi.getTasks);
  data = getTasksApi.data;
  useEffect(() => {
    getTasksApi.request();
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const filtered = data.filter((m) => m.deliveryWorker._id === user._id);

  const updateTaskApi = useApi(updateApi.update);

  const onButtonPress = async (orderId) => {
    const result = await updateTaskApi.request(orderId);

    if (result.status === 200) {
      showNotification();
    }

    if (!result.status === 200) {
      return alert("Unfortunately, could not update the task status!");
    }
  };

  const showNotification = () => {
    Notifications.presentLocalNotificationAsync({
      title: "Congratulations",
      body: "Task status was successfully updated!",
    });
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        inverted
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(tasks) => tasks._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <DeliveryTaskCard
              customerName={item.customer.name}
              customerPhone={item.customer.phone}
              //customerLocation={item.customer.location}
              customerAddress={item.customer.address}
              deliveryWorkerName={item.deliveryWorker.name}
              deliveryWorkerPhone={item.deliveryWorker.phone}
              storeName={item.store.storeName}
              storePhone={item.store.phone}
              //storeLocation={item.store.location}
              orderTime={item.ordertime}
              status={item.status}
              total={item.total}
              onPress={() =>
                navigation.navigate(routes.TASK_DETAILS, item.orderitems)
              }
              onButtonPress={() => onButtonPress(item._id)}
            />
          </View>
        )}
      />
    </Screen>
  );
}

export default DeliveryTaskScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
