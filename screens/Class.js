import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { theme } from "../theme";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTAINER_SPACE = width * 0.281;
const SPACE = 10;

const dataCarousel = [
  {
    img: require("../assets/PageClass/position1.png"),
    title: "Position 1",
    color: "#DFEAE2",
    titleColor: "#5E7167",
  },
  {
    img: require("../assets/PageClass/position2.png"),
    title: "Position 2",
    color: "#F7E4D2",
    titleColor: "#CD6D4F",
  },
  {
    img: require("../assets/PageClass/position3.png"),
    title: "Position 3",
    color: "#E2E2E2",
    titleColor: "#8F8F8F",
  },
  {
    img: require("../assets/PageClass/position4.png"),
    title: "Position 4",
    color: "#DFEAE2",
    titleColor: "#5E7167",
  },
];

const Class = () => {
  return (
    <View>
      <Text style={styles.text}>Category</Text>
      <View style={{ width: width, height: 130, marginBottom: 20 }}>
        <FlatList
          data={dataCarousel}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingLeft: 24 }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: CONTAINER_SPACE }}>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: item.color,
                    alignItems: "center",
                    width: 90,
                    height: 120,
                    elevation: 5, // Para Android (agrega sombra)
                    shadowColor: "#000000", // Para iOS (color de la sombra)
                    shadowOffset: { width: 0, height: 2 }, // Para iOS (desplazamiento de la sombra)
                    shadowOpacity: 0.3, // Para iOS (opacidad de la sombra)
                    shadowRadius: 2, // Para iOS (radio de la sombra)
                  }}
                >
                  <Image source={item.img} style={styles.posterImage} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: item.titleColor,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.text}>Recommended Classes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
    paddingHorizontal: 24,
    marginBottom: 15,
    fontWeight: 600,
  },
  posterImage: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    margin: 0,
    marginBottom: 6,
  },
});

export default Class;
