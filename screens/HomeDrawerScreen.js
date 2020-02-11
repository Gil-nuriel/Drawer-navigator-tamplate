import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../assets/Styles";

export default function HomeDrawerScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Home Drawer Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
    </View>
  );
}
