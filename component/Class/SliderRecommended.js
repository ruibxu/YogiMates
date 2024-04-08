import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { dataCarouselRecommended } from "../../data/DataRecommendedClass";
import PaginationSlider from "./PaginationSlider";
import { useEffect, useRef, useState } from "react";
import StarRating from "../Rating";

const width = Dimensions.get("window").width;
const ITEM_WIDTH = width - 48;

const SliderRecommended = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    console.log("viewableItems", viewableItems[0].index);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataCarouselRecommended();
        setFakeData(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        width: width,
        marginBottom: 20,
        position: "relative",
        height: 240,
      }}
    >
      <FlatList
        data={fakeData}
        keyExtractor={(item) => item.title}
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ITEM_WIDTH, marginHorizontal: 24 }}>
              <View style={styles.posterContainer}>
                <ImageBackground
                  source={item.thumbnailUrl}
                  style={{ width: "100%", height: "100%" }}
                  imageStyle={{ borderRadius: 10 }} // Aplica bordes redondeados a la imagen
                >
                  {/* Gradiente */}
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <View style={{ width: "100%", height: 150 }}>
                      <View style={styles.box}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View>
                            <Text
                              style={[
                                styles.text,
                                {
                                  fontSize: 16,
                                  color: "#5E7167",
                                },
                              ]}
                            >
                              {item.title}
                            </Text>
                            <Text
                              style={[
                                styles.text,
                                {
                                  fontSize: 12,
                                  color: "#5E7167",
                                },
                              ]}
                            >
                              {item.titleInstructor}
                            </Text>
                          </View>
                          <View
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              width: 70,
                              alignItems: "center",
                            }}
                          >
                            <Image
                              source={require("../../assets/PageClass/calendar_add_on.png")}
                              style={[styles.icon, { width: 30, height: 30 }]}
                            />
                            <Image
                              source={require("../../assets/PageClass/add_circle.png")}
                              style={[styles.icon, { width: 30, height: 30 }]}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
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
                                  fontSize: 10,
                                  // fontWeight: 600,
                                },
                              ]}
                            >
                              {item.starsRating}
                              <Text
                                style={[
                                  styles.text,
                                  {
                                    fontSize: 10,
                                    fontWeight: 200,
                                  },
                                ]}
                              >{`(${item.commentCount} reviews)`}</Text>
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              display: "flex",
                              justifyContent: "space-between",
                              width: "50%",
                            }}
                          >
                            <View
                              style={{
                                height: "",
                                display: "flex",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                width: "100%",
                              }}
                            >
                              <View style={styles.boxData}>
                                <Image
                                  source={require("../../assets/PageClass/schedule.png")}
                                  style={[
                                    styles.icon,
                                    { width: 10, height: 10 },
                                  ]}
                                />
                                <Text style={styles.textData}>
                                  {item.totalMinutes} mins
                                </Text>
                              </View>
                              <View style={styles.boxData}>
                                <Image
                                  source={require("../../assets/PageClass/local_fire_department.png")}
                                  style={[
                                    styles.icon,
                                    { width: 10, height: 10 },
                                  ]}
                                />
                                <Text style={styles.textData}>
                                  {item.calories} kal
                                </Text>
                              </View>
                              <View style={styles.boxData}>
                                <Image
                                  source={require("../../assets/PageClass/equalizer.png")}
                                  style={[
                                    styles.icon,
                                    { width: 10, height: 10 },
                                  ]}
                                />
                                <Text style={styles.textData}>
                                  {item.difficulty}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.gradientOverlay} />
                    </View>
                  </View>
                  {/* Contenido opcional */}
                </ImageBackground>
              </View>
            </View>
          );
        }}
      />
      <PaginationSlider data={fakeData} scrollX={scrollX} index={index} />
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    width: "100%",
    height: 210,
    resizeMode: "cover",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative", // Necesario para posicionar el gradiente correctamente
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white", // Fondo blanco
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))", // Gradiente transparente a blanco
  },
  box: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: 71,
    padding: 7,
  },
  textData: {
    color: "#CD6D4F",
    // fontWeight: 600,
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

export default SliderRecommended;
