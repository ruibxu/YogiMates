import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../theme";
import SliderCategory from "../components/Class/SliderCategory";
import SliderRecommended from "../components/Class/SliderRecommended";
import SliderList from "../components/Class/SliderList";

const Class = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Category</Text>
        <SliderCategory navigation={navigation}/>
        <Text style={styles.text}>Recommended Classes</Text>
        <SliderRecommended />
        <Text style={styles.text}>My List</Text>
        <SliderList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
    fontSize: 16,
    paddingHorizontal: 24,
    marginBottom: 15,
  },
});

export default Class;
