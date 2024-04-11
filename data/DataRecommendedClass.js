

const apiKey = "AIzaSyCSKGJiALGzcQMfjmFqJHZe6ycbL0JyNDM";
const videoIds = ["o_73FeXw3ZI", "p5K6wU-0zG4", "CbQ2hsiEeYc"];

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

export const dataCarouselRecommended = async () => {
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
      const thumbnailUrl = videoData.snippet.thumbnails.high.url;
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
      yogismIndex = ((yogismIndex + 1) % 4) + 4;
    }
  }
  return videoDataArray;
};
