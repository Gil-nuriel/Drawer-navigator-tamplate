import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Content from "../components/Content";
import { globalStyles } from "../assets/Styles";

export default function HomeStackScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Home Stack Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
      <View style={styles.content}>
        <Content />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { padding: 10 },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  }
});
