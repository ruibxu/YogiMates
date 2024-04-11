// export const dataCategoryClass = [
//   {
//     img: require("../assets/PageClass/position1.png"),
//     title: "Position 1",
//     color: "#DFEAE2",
//     titleColor: "#5E7167",
//   },
//   {
//     img: require("../assets/PageClass/position2.png"),
//     title: "Position 2",
//     color: "#F7E4D2",
//     titleColor: "#CD6D4F",
//   },
//   {
//     img: require("../assets/PageClass/position3.png"),
//     title: "Position 3",
//     color: "#E2E2E2",
//     titleColor: "#8F8F8F",
//   },
//   {
//     img: require("../assets/PageClass/position4.png"),
//     title: "Position 4",
//     color: "#DFEAE2",
//     titleColor: "#5E7167",
//   },
// ];
import axios from "axios";

// Endpoint de la API de poses
const posesEndpoint = "https://yoga-api-nzy4.onrender.com/v1/poses";

// Función para obtener las poses desde la API
// export const fetchPoses = async () => {
//   try {
//     const response = await axios.get(posesEndpoint);
//     const allPoses = response.data; // Obtiene todas las poses de la respuesta
//     const selectedPoses = allPoses.slice(0, 4); // Obtiene solo las primeras 4 poses
//     return selectedPoses; // Retorna las poses seleccionadas
//   } catch (error) {
//     console.error('Error al obtener las poses:', error);
//     return []; // Retorna un arreglo vacío en caso de error
//   }
// };

// Función para mapear los datos de las poses a un formato compatible con dataCategoryClass
export const mapPosesToDataCategoryClass = async () => {
  const yogismData = await fetch(
    "https://priyangsubanerjee.github.io/yogism/yogism-api.json"
  )
    .then((response) => response.json())
    .then((data) => data.featured.slice(2, 3)) // Obtener solo los primeros 4 elementos de la propiedad 'featured'
    .catch((error) => {
      console.error("Error fetching yogism data:", error);
      return [];
    });

  return yogismData[0].scheduled.slice(4, 8).map((pose) => ({
    img: pose.image, // Utiliza la URL del PNG como imagen
    title: pose.sanskrit_name, // Utiliza el nombre en inglés de la pose como título
    color: "#FFEFD6", // Define el color según tus preferencias o según los datos de la pose
    titleColor: "#5E7167", // Define el color del título según tus preferencias
  }));
};

// export default dataCategoryClass;
