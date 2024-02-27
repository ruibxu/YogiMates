import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { dataCarouselRecommended } from "../../data/DataRecommendedClass";
import PaginationSlider from "./PaginationSlider";
import { useRef, useState } from "react";

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
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  

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
        data={dataCarouselRecommended}
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
              <View
                style={{
                  borderRadius: 10,
                  alignItems: "center",
                  width: ITEM_WIDTH,
                }}
              >
                <Image source={item.img} style={styles.posterImage} />
              </View>
            </View>
          );
        }}
      />
      <PaginationSlider
        data={dataCarouselRecommended}
        scrollX={scrollX}
        index={index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: 210,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default SliderRecommended;
