import { Animated, Dimensions, StyleSheet, View } from "react-native";

const width = Dimensions.get("window").width;

const PaginationSlider = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWith = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {
                width: dotWith,
                marginHorizontal: 7,
              },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default PaginationSlider;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#D9D9D9",
  },
  dotActive: {
    backgroundColor: "#A5BEB1",
  },
});
