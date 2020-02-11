import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
