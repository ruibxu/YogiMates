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

      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>Daily Goals</Text>
          <Text style={styles.description}>description</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>Recommendations</Text>
          <Text style={styles.description}>description</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>Analysis summary</Text>
          <Text style={styles.description}>description</Text>
        </View>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    // margin: 10,
    padding: 10,
    height: 200
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
