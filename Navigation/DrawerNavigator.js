import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../screens/AboutScreen";
import HomeDrawerScreen from "../screens/HomeDrawerScreen";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      edgeWidth={150}
      drawerContentOptions={{
        activeTintColor: "#e91e63"
      }}
    >
      <Drawer.Screen name="Home" component={HomeDrawerScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
