import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../assets/Styles";

export default function AboutScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
    </View>
  );
}
