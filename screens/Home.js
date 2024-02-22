import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="caretleft" size={30} color="black" />
        <Text style={{ color: theme.colors.text }}>Home</Text>
        <FontAwesome name="circle" size={30} color="black" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    padding: 15,
  },
});
