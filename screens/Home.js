import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CircularProgressBar from "../components/progressBar";
import { MaterialIcons } from "@expo/vector-icons";
import homeyoga from '../assets/homeyoga.png';
import analysis from '../assets/analysis.png';


const Home = () => {
  const progress = 70;
  return (
    <ScrollView>
<View style={styles.container}>
      {/* <View style={styles.header}>
        <AntDesign name="caretleft" size={30} color="black" />
        <Text style={{ color: theme.colors.text }}>Home</Text>
        <FontAwesome name="circle" size={30} color="black" />
      </View> */}

      <Text style={styles.title}>Weekly goals</Text>
      <View style={[styles.card, { backgroundColor: "#F7E4D2", height:150 }]}>
        <View style={styles.content}>
          <Image
            source={homeyoga} // or provide a URL
            style={{ width: 124, height: 124 }} // Set width and height as per your requirement
          />
          <CircularProgressBar
            radius={45}
            strokeWidth={10}
            progress={progress}
            color="#CD6D4F" // Green color for progress
            bgColor="#CD6D4F69" // Light gray color for background
          />
          <View style={styles.time}>
            <View style={styles.subtime}>
              <AntDesign name="clockcircle" size={24} color="#CD6D4F" />
              <Text>14 mins</Text>
            </View>
            <View style={styles.subtime}>
              <FontAwesome5 name="fire-alt" size={24} color="#CD6D4F" />
              <Text>312 kal</Text>
            </View>
            <View style={styles.subtime}>
              <MaterialIcons name="bar-chart" size={24} color="#CD6D4F" />
              <Text>Beginner</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Analysis summary</Text>
      <View style={[styles.card, { backgroundColor: "#DFEAE2" , height:250}]}>
        <View style={styles.content}>
        <Image
            source={analysis} // or provide a URL
            style={{ width: 124, height: 150 }} // Set width and height as per your requirement
          />
           <Image
            source={analysis} // or provide a URL
            style={{ width: 124, height: 150 }} // Set width and height as per your requirement
          />
        </View>
      </View>

      <Text style={styles.title}>Recommendations</Text>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.description}>description</Text>
        </View>
      </View>
    </View>
    </ScrollView>
    
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
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
    marginTop: 15,
  },
  description: {
    fontSize: 16,
  },
  time: {
    flexDirection: "column",
    gap: 15,
  },
  subtime: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
