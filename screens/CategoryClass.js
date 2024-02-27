import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryClass = ({ route, navigation }) => {
  const selectedCategory  = route.params;
  console.log(route.params.title)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory ? selectedCategory.title : "CategoryClass",
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Content for {selectedCategory.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryClass;
