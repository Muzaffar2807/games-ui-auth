import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const AppStack = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerType: "front" }}
    >
      <Drawer.Screen component={HomeScreen} name="Home" />
    </Drawer.Navigator>
  );
};

export default AppStack;
