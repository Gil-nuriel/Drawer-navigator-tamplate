import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native";

export default function Content() {
  const navigation = useNavigation();
  const [cats, setCats] = useState([
    { emoji: "🎂", description: "Birthday cake", key: 1 },
    { emoji: "👀", description: "Eyes", key: 2 },
    { emoji: "🎉", description: "Party popper", key: 3 },
    { emoji: "✨", description: "Sparkles", key: 4 },
    { emoji: "🎶", description: "Musical notes", key: 5 }
  ]);

  return (
    <View style={{ alignItems: "center" }}>
      <Button
        color="#333"
        title="Empty Content"
        onPress={() => navigation.navigate("Content")}
      />
      <FlatList
        data={cats}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Content", item)}
          >
            <Text style={styles.card}>{item.emoji}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={value => value.key.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    backgroundColor: "#ddd",
    margin: 5
  }
});
