import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { theme } from "../../theme";
import StarRating from "../Rating";

const CardClass = ({ item }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#D9D9D91A",
        alignItems: "center",
        width: 120,
        height: 200,
        shadowColor: "#000000",
        shadowOffset: {
          width: 1,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        overflow: "hidden",
      }}
    >
      <Image source={item.img} style={styles.posterImage} />
      <View style={styles.container}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 10,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 7,
            },
          ]}
        >
          Instructor Name
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <StarRating rating={item.rating} />
          <Text
            style={[
              styles.text,
              {
                fontSize: 7,
                fontWeight: 600,
              },
            ]}
          >
            {item.rating}
            <Text
              style={[
                styles.text,
                {
                  fontSize: 7,
                  fontWeight: 200,
                },
              ]}
            >{`(${item.commentCount})`}</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 49,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <View style={styles.boxData}>
              <Image
                source={require("../../assets/PageClass/schedule.png")}
                style={[styles.icon, { width: 10, height: 10 }]}
              />
              <Text style={styles.textData}>{item.minutes} mins</Text>
            </View>
            <View style={styles.boxData}>
              <Image
                source={require("../../assets/PageClass/local_fire_department.png")}
                style={[styles.icon, { width: 10, height: 10 }]}
              />
              <Text style={styles.textData}>{item.calories} kal</Text>
            </View>
            <View style={styles.boxData}>
              <Image
                source={require("../../assets/PageClass/equalizer.png")}
                style={[styles.icon, { width: 10, height: 10 }]}
              />
              <Text style={styles.textData}>{item.difficulty}</Text>
            </View>
          </View>
          <View
            style={{
              height: 49,
              display: "flex",
              justifyContent: "space-around",
              width: 20,
            }}
          >
            <Image
              source={require("../../assets/PageClass/calendar_add_on.png")}
              style={[styles.icon, { width: 15, height: 15 }]}
            />
            <Image
              source={require("../../assets/PageClass/add_circle.png")}
              style={[styles.icon, { width: 15, height: 15 }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 4,
  },
  text: {
    color: theme.colors.text,
    fontWeight: 600,
    width: "100%",
    alignItems: "flex-start",
  },
  posterImage: {
    width: 120,
    height: 80,
    resizeMode: "cover",
    margin: 0,
    marginBottom: 6,
  },
  textData: {
    color: "#CD6D4F",
    fontWeight: 600,
    fontSize: 7,
    marginLeft: 5,
  },
  icon: {
    resizeMode: "cover",
    margin: 0,
  },
  boxData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CardClass;
