// Importa las imágenes en la parte superior del archivo
import imgYoga1 from "../assets/PageClass/imgYoga1.png";
import imgYoga2 from "../assets/PageClass/imgYoga2.png";
import imgYoga3 from "../assets/PageClass/imgYoga3.png";
import imgYoga4 from "../assets/PageClass/imgYoga4.png";
import imgYoga5 from "../assets/PageClass/imgYoga5.png";

const apiKey = "AIzaSyCSKGJiALGzcQMfjmFqJHZe6ycbL0JyNDM";
const videoIds = [
  "o_73FeXw3ZI",
  "p5K6wU-0zG4",
  "CbQ2hsiEeYc",
  "X3-gKPNyrTA",
  "Eml2xnoLpYE",
];

// Función para obtener los datos de un video dado su ID
const fetchVideoData = async (videoId) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`
    );
    const data = await response.json();
    return data.items[0];
  } catch (error) {
    console.error("Error al obtener datos del video:", error);
    return null;
  }
};

const parseDurationToMinutes = (duration) => {
  // Extraer las partes de la duración
  const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  // Extraer horas, minutos y segundos
  const hours = parseInt(matches[1]) || 0;
  const minutes = parseInt(matches[2]) || 0;
  const seconds = parseInt(matches[3]) || 0;

  // Calcular la duración total en minutos
  const totalMinutes = Math.round(hours * 60 + minutes + seconds / 60);

  return totalMinutes;
};

// Función para obtener datos de múltiples videos// Función para obtener datos de múltiples videos
export const generateFakeDataClassesClass = async () => {
  const yogismData = await fetch(
    "https://priyangsubanerjee.github.io/yogism/yogism-api.json"
  )
    .then((response) => response.json())
    .then((data) => data.featured.slice(2, 3)) // Obtener solo los primeros 4 elementos de la propiedad 'featured'
    .catch((error) => {
      console.error("Error fetching yogism data:", error);
      return [];
    });

  const videoDataArray = [];
  let yogismIndex = 4;
  for (const videoId of videoIds) {
    const videoData = await fetchVideoData(videoId);

    if (videoData) {
      const duration = videoData.contentDetails.duration;
      const commentCount = videoData.statistics.commentCount;
      const likeCount = parseInt(videoData.statistics.likeCount);
      // const dislikeCount = videoData.statistics.dislikeCount;
      const viewCount = parseInt(videoData.statistics.viewCount);
      const thumbnailUrl = videoData.snippet.thumbnails.medium.url;
      let title = videoData.snippet.title;
      if (title.length > 26) {
        title = title.substring(0, 20) + "...";
      }
      const titleInstructor = videoData.snippet.channelTitle;
      // let yogismIndex = 2;

      const totalMinutes = parseDurationToMinutes(duration);

      // Calcular el promedio de me gusta y las vistas
      let starsRating = 0;
      if (viewCount > 0) {
        const likePercentage = (likeCount / viewCount) * 100;
        starsRating = Math.min(5, Math.ceil(likePercentage / 20));
      }
      // yogismIndex = (yogismIndex + 1) % 8;
      // Guardar los datos en un objeto
      const videoInfo = {
        title,
        totalMinutes,
        commentCount,
        calories: 500,
        starsRating,
        thumbnailUrl, // Agregar la URL de la miniatura al objeto
        difficulty: yogismData[0].scheduled[yogismIndex].category,
        titleInstructor,
        yogismData: yogismData[0].scheduled[yogismIndex].sanskrit_name,
      };

      // Agregar los datos del video al array
      videoDataArray.push(videoInfo);
      console.log(yogismIndex);
      yogismIndex = ((yogismIndex + 1) % 4) + 4;
    }
  }
  return videoDataArray;
};

// export const generateFakeDataClassesClass = async () => {
//   const fakeData = [];
//   const titles = [
//     "Position_yoga_1",
//     "Position_yoga_2",
//     "Position_yoga_3",
//     "Position_yoga_4",
//     "Position_yoga_5",
//   ];

//   for (let i = 0; i < titles.length; i++) {
//     try {
//       const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/poses");
//       if (!response.ok) {
//         throw new Error("Failed to fetch yoga data");
//       }
//       const data = await response.json();
//       const yogaPosition = data[i]; // Assuming the API returns an array of yoga positions

//       fakeData.push({
//         img: getImage(yogaPosition.id), // Assuming the API returns an image index
//         title: yogaPosition.sanskrit_name_adapted,
//         rating: yogaPosition.rating || getRandomRating(),
//         commentCount: yogaPosition.comments || getRandomNumber(20),
//         minutes: yogaPosition.duration || getRandomNumberInRange(20, 80),
//         calories: yogaPosition.calories || getRandomNumberInRange(100, 600),
//         difficulty: yogaPosition.level || getRandomDifficulty(),
//       });
//     } catch (error) {
//       console.error("Error fetching yoga data:", error);
//     }
//   }
//   console.log(fakeData)

//   return fakeData;
// };

// // Funciones para generar valores aleatorios de rating y difficulty
// const getRandomRating = () => {
//   return Math.random() * (5 - 1) + 1;
// };

// const getRandomDifficulty = () => {
//   const difficulties = ["Beginner", "Intermediate", "Advanced"];
//   const randomIndex = Math.floor(Math.random() * difficulties.length);
//   return difficulties[randomIndex];
// };

// // Funciones para generar números aleatorios en un rango específico
// const getRandomNumber = (max) => {
//   return Math.floor(Math.random() * max);
// };

// const getRandomNumberInRange = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const getImage = (index) => {
//   switch (index) {
//     case 1:
//       return imgYoga1;
//     case 2:
//       return imgYoga2;
//     case 3:
//       return imgYoga3;
//     case 4:
//       return imgYoga4;
//     case 5:
//       return imgYoga5;
//     default:
//       return null;
//   }
// };
