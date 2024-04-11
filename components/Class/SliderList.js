import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import { generateFakeDataClassesClass } from "../../data/DataClassesClass";
import CardClass from "./CardClass";
import { useEffect, useState } from "react";

const width = Dimensions.get("window").width;

const CONTAINER_SPACE = width * 0.39;

const SliderList = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await generateFakeDataClassesClass();
        setFakeData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ width: width, height: 210, marginBottom: 20 }}>
      <FlatList
        data={fakeData}
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