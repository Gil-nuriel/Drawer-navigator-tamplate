import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStackScreen from "../screens/HomeStackScreen";
import ContentScreen from "../screens/ContentScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Stack" component={HomeStackScreen} />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={({ route }) => {
          if (route.params) return { title: route.params.description };
        }}
      />
    </Stack.Navigator>
  );
}
