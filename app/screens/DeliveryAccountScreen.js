import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "Help",
    icon: {
      name: "help",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.HELP,
  },
  {
    title: "Contact Us",
    icon: {
      name: "map-outline",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.CONTACT_US,
  },
];

function DeliveryAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <ListItem title={user.name} subTitle={user.phone} />
        <View style={styles.flatlist}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.secondary} />
          }
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}

export default DeliveryAccountScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
