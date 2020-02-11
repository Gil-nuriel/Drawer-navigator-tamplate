import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/Styles";

export default function ContentScreen({ route }) {
  if (route.params) {
    const { emoji } = route.params;
    return (
      <View style={globalStyles.container}>
        <Text>Content Screen</Text>
        <Text>{route.params ? emoji : null}</Text>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Text>Content Screen</Text>
      </View>
    );
  }
}
