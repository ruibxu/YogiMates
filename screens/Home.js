import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CircularProgressBar from "../components/progressBar";
import { MaterialIcons } from "@expo/vector-icons";
import homeyoga2 from "../assets/homeyoga2.png";
import analysis from "../assets/Home_Muscles.png";
import stress_management from "../assets/stress_management.png";
import heart from "../assets/ecg_heart.png";
import bedtime from "../assets/bedtime.png";
import pen from "../assets/border_color.png"
import { SafeAreaView } from "react-native";
import YogaVideos from "../data/YogaVideos";
import { ActivitySummary } from "@dynamic-data/oura-data/dist/cjs/mockups/activitySummary";

const Home = (summaryData) => {
  // Access the properties of the ActivitySummary object
  console.log("Summary Date:", ActivitySummary.summary_date);
  console.log("Steps:", ActivitySummary.steps);
  console.log("Total Calories Burnt:", ActivitySummary.cal_total);

  // Function to calculate the time spent exercising within a specific date and time range
  function calculateExerciseTime(activitySummary, day_start, day_end) {
    // Extract relevant data
    const { activity_log } = activitySummary;

    // Initialize total exercise time
    let totalExerciseTime = 0;

    // Convert day_start and day_end to Date objects
    const startDate = new Date(day_start);
    const endDate = new Date(day_end);

    // Calculate the duration of the exercise session in seconds
    const startTime = new Date(ActivitySummary.day_start);
    console.log(startTime);
    const endTime = new Date(ActivitySummary.day_end);
    const durationInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds

    // Add the duration to the total exercise time
    totalExerciseTime += durationInSeconds;

    // Convert total exercise time from seconds to minutes (or hours if needed)
    const totalExerciseTimeMinutes = totalExerciseTime / 60;
    console.log(totalExerciseTimeMinutes);

    return totalExerciseTimeMinutes;
  }
  const exerciseTime = Math.floor(
    calculateExerciseTime(
      ActivitySummary,
      ActivitySummary?.day_start,
      ActivitySummary?.day_end
    )
  );

  const progress = ActivitySummary.score;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.header}>
        <AntDesign name="caretleft" size={30} color="black" />
        <Text style={{ color: theme.colors.text }}>Home</Text>
        <FontAwesome name="circle" size={30} color="black" />
      </View> */}
        <View style={{ flexDirection:"row",gap:5 }}>
          <Text style={styles.title}>Weekly goals </Text>
          <Image
              source={pen} // or provide a URL
              style={{ width: 20, height: 20, marginTop: 15}} // Set width and height as per your requirement
            />
        </View>
        
        <View
          style={[styles.card, { backgroundColor: "#DFEAE2", height: 150, margin:15 }]}
        >
          <View style={styles.content}>
            <Image
              source={homeyoga2} // or provide a URL
              style={{ width: 100, height: 100 }} // Set width and height as per your requirement
            />
            <CircularProgressBar
              radius={45}
              strokeWidth={10}
              progress={progress}
              color="#90B4A1" // Green color for progress
              bgColor="#CD6D4F69" // Light gray color for background
            />
            <View style={styles.time}>
              <View style={styles.subtime}>
                <AntDesign name="clockcircle" size={24} color="#90B4A1" />
                <Text>{exerciseTime} mins</Text>
              </View>
              <View style={styles.subtime}>
                <FontAwesome5 name="fire-alt" size={24} color="#90B4A1" />
                <Text>{ActivitySummary.cal_total} kal</Text>
              </View>
              <View style={styles.subtime}>
                <MaterialIcons name="bar-chart" size={24} color="#90B4A1" />
                <Text>Beginner</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.title}>Analysis summary</Text>
        <View style={[styles.Analysiscard, { height: 250 }]}>
          <View style={styles.content}>
            <View>
              <View style={styles.Analysis1}>
                <View style={styles.circleLabels}>
                  <AntDesign name="clockcircle" size={24} color="#CD6D4F" />
                  <Text>{exerciseTime} </Text>
                </View>
                <View style={styles.circleLabels}>
                  <FontAwesome5 name="fire-alt" size={24} color="#CD6D4F" />
                  <Text>{ActivitySummary.cal_total} </Text>
                </View>
                <View style={styles.circleLabels}>
                  <MaterialIcons name="bar-chart" size={24} color="#CD6D4F" />
                  <Text>Beg</Text>
                </View>
              </View>
              <View>
                <View style={[styles.labels, {backgroundColor:"#F7D7DA"}]}>
                  <Image
                    source={heart} // or provide a URL
                    style={{ width: 33, height: 33 }} // Set width and height as per your requirement
                  />
                  <View>
                    <Text>120</Text>
                    <Text>mbp</Text>
                  </View>
                </View>
                <View style={[styles.labels, {backgroundColor:"#DEDEEA"}]}>
                  <Image
                    source={stress_management} // or provide a URL
                    style={{ width: 33, height: 33 }} // Set width and height as per your requirement
                  />
                  <View>
                    <Text>Low</Text>
                    
                  </View>
                </View>
                <View style={[styles.labels, {backgroundColor:"#DCEDFA"}]}>
                  <Image
                    source={bedtime} // or provide a URL
                    style={{ width: 33, height: 33 }} // Set width and height as per your requirement
                  />
                  <View>
                    <Text>8h 42m</Text>
                    
                  </View>
                </View>
              </View>
            </View>
            <Image
              source={analysis} // or provide a URL
              style={{ width: 124, height: 150 }} // Set width and height as per your requirement
            />
          </View>
        </View>

        <Text style={styles.title}>Recommendations</Text>
        <View style={styles.carousel}>
          <View style={styles.recommendation}>
            {/* <YogaVideos /> */}
            <Text style={styles.description}>
              You haven't had streches in a while. We suppest you go to the
              class section and try out some streching yoga.
            </Text>
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
    backgroundColor: "#f1f3f1",
  },
  carousel: {},
  Analysis1: {
    flexDirection: "row",
    gap: 5,
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
    // height: 200,
  },
  Analysiscard: {
    padding: 10,
    marginBottom:35,
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
    fontWeight: "600",
    marginTop: 15,
    color: "#5E7167",
  },
  description: {
    fontSize: 16,
    lineHeight: 30,
    color: "#5E7167",
  },
  time: {
    flexDirection: "column",
    marginLeft:5,
    gap: 15,
  },
  subtime: {

    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  labels: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 42,
    backgroundColor: "red",
    width: 150,
    borderRadius: 4,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  circleLabels:{
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    elevation: 5,
    // height: 42,
    // backgroundColor: "red",
    width: 54,
    height:54,
    borderRadius: 27,
    flexDirection: "column",
    // gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor:"#f7e4d2"
  },
  recommendation: {
    backgroundColor: "#DFEAE2",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    // margin: 10,
    padding: 30,

    // height: 200,
  },
});
