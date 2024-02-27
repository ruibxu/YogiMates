import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { dataCarousel } from "../../data/dataCategoryClass";
import { theme } from "../../theme";

const width = Dimensions.get("window").width;

const CONTAINER_SPACE = width * 0.281;

const SliderCategory = () => {
  return (
    <View style={{ width: width, height: 130, marginBottom: 20 }}>
      <FlatList
        data={dataCarousel}
        showsHorizontalScrollIndicator={false}
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
                  elevation: 5,
                  shadowColor: "#000000",
                  shadowOffset: { width: 0, height: 2 }, 
                  shadowOpacity: 0.3, 
                  shadowRadius: 2,
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

export default SliderCategory;
