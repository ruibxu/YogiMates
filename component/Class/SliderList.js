import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import { dataClassesClass } from "../../data/DataClassesClass";
import CardClass from "./CardClass";

const width = Dimensions.get("window").width;

const CONTAINER_SPACE = width * 0.39;

const SliderList = () => {
  return (
    <View style={{ width: width, height: 210, marginBottom: 20 }}>
      <FlatList
        data={dataClassesClass}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingLeft: 24 }}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: CONTAINER_SPACE }} key={index}>
              <CardClass item={item} type={false}/>
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

export default SliderList;