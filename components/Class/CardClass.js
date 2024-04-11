import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { theme } from "../../theme";
import StarRating from "../Rating";

const CardClass = ({ item, type }) => {
  // console.log(item)
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#D9D9D91A",
        alignItems: "center",
        width: type ? 160 : 120,
        height: type ? 158 : 200,
        // shadowColor: "#000000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 3,
        overflow: "hidden",
        marginBottom: type ? 20 : "",
      }}
    >
      <Image
        source={item.thumbnailUrl}
        style={[
          styles.posterImage,
          { width: type ? 160 : 120, height: type ? 86 : 80 },
        ]}
      />
      <View style={styles.container}>
        <View
          style={{
            display: type ? "flex" : "",
            flexDirection: type ? "row" : "",
            justifyContent: type ? "space-between" : "",
          }}
        >
          <View>
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
              {item.titleInstructor}
            </Text>
          </View>
          {type ? (
            <View
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                width: 45,
                alignItems: "center",
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
          ) : (
            ""
          )}
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <StarRating rating={item.starsRating} />
          <Text
            style={[
              styles.text,
              {
                fontSize: 7,
                // fontWeight: 600,
              },
            ]}
          >
            {item.starsRating}
            <Text
              style={[
                styles.text,
                {
                  fontSize: 7,
                  fontWeight: "200",
                },
              ]}
            >{`(${item.commentCount})`}</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: type ? "" : 49,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: type ? "row" : "",
              width: type ? "100%" : "",
            }}
          >
            <View style={styles.boxData}>
              <Image
                source={require("../../assets/PageClass/schedule.png")}
                style={[styles.icon, { width: 10, height: 10 }]}
              />
              <Text style={styles.textData}>{item.totalMinutes} mins</Text>
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
          {type ? (
            ""
          ) : (
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
          )}
        </View>
      </View>
      <View style={styles.bottomShadow} />
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
    fontWeight: "600",
    width: "100%",
    alignItems: "flex-start",
  },
  posterImage: {
    resizeMode: "cover",
    margin: 0,
    marginBottom: 6,
  },
  textData: {
    color: "#CD6D4F",
    fontWeight: "600",
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
  bottomShadow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 4, // Ajusta según la altura deseada de la sombra
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Color de la sombra
  },
});

export default CardClass;
