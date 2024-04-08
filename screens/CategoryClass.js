import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { theme } from "../theme";
import CardClass from "../component/Class/CardClass";
import { generateFakeDataClassesClass } from "../data/DataClassesClass";

const CategoryClass = ({ route, navigation }) => {
  const selectedCategory = route.params;
  console.log(route.params.title);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await generateFakeDataClassesClass();
        const filteredData = data.filter(
          (item) => item.yogismData === selectedCategory.title
        );
        setFakeData(filteredData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  console.log(fakeData);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "CLASS",
      headerTintColor: "#7e9589",
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
    });
  }, [navigation, selectedCategory]);
  //hacer un filter para filtra la fakeData por selectedCategory.title

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.filterBox}>
          <Text style={styles.text}>{selectedCategory.title}</Text>
          <Image source={require("../assets/PageClass/filter_list.png")} />
        </View>
        <View style={styles.options}>
          {fakeData.map((item) => (
            <CardClass key={item.title} item={item} type={true} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    // fontWeight: 600,
    color: theme.colors.text,
  },
  filterBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default CategoryClass;
