import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
// import { dataCategoryClass } from "../../data/dataCategoryClass";
import { fetchPoses, mapPosesToDataCategoryClass } from '../../data/DataCategory';
import { useEffect, useState } from "react";



const width = Dimensions.get("window").width;

const CONTAINER_SPACE = width * 0.281;

const SliderCategory = ({ navigation }) => {
  // const [poses, setPoses] = useState([]);

  // useEffect(() => {
  //   // Obtener las poses desde la API y actualizar el estado
  //   const fetchData = async () => {
  //     const posesData = await fetchPoses();
  //     setPoses(posesData);
  //   };

  //   fetchData();
  // }, []);

  // Mapear los datos de las poses al formato de dataCategoryClass
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mapPosesToDataCategoryClass();
        setFakeData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);
  // const data = mapPosesToDataCategoryClass(poses);

  const handleItemPress = (title) => {
    // Navegar a la pantalla de categoría o sección con una ruta dinámica
    navigation.navigate(`CategoryClass`, { title });
  };

  return (
    <View style={{ width: width, height: 130, marginBottom: 20 }}>
      <FlatList
        data={fakeData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingLeft: 24 }}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => handleItemPress(item.title)}>
              <View style={{ width: CONTAINER_SPACE }}>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: item.color,
                    alignItems: "center",
                    width: 90,
                    height: 120,
                    overflow: "hidden"
                    // elevation: 5,
                    // shadowColor: "#000000",
                    // shadowOffset: { width: 0, height: 2 },
                    // shadowOpacity: 0.3,
                    // shadowRadius: 2,
                  }}
                >
                  <Image source={item.img ? { uri: item.img } : null} style={styles.posterImage} />
                  <Text
                    style={{
                      fontSize: 12,
                      color: item.titleColor,
                    }}
                  >
                    {item.title}
                  </Text>
                  <View style={styles.bottomShadow} />
                </View>
              </View>
            </TouchableOpacity>
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
  bottomShadow: {
    position: "absolute",
    left: 0,
    borderRadius: 10,
    right: 0,
    bottom: 0,
    height: 4, // Ajusta según la altura deseada de la sombra
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Color de la sombra
  },
});

export default SliderCategory;
