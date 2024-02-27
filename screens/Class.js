import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { theme } from "../theme";
import SliderCategory from "../component/Class/SliderCategory";
import SliderRecommended from "../component/Class/SliderRecommended";

const Class = () => {
  return (
    <View>
      <Text style={styles.text}>Category</Text>
      <SliderCategory/>
      <Text style={styles.text}>Recommended Classes</Text>
      <SliderRecommended/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
    fontSize: 16,
    paddingHorizontal: 24,
    marginBottom: 15,
    fontWeight: 600,
  },
});

export default Class;
