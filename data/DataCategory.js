export const mapPosesToDataCategoryClass = async () => {
  const yogismData = await fetch(
    "https://priyangsubanerjee.github.io/yogism/yogism-api.json"
  )
    .then((response) => response.json())
    .then((data) => data.featured.slice(2, 3)) 
    .catch((error) => {
      console.error("Error fetching yogism data:", error);
      return [];
    });

  return yogismData[0].scheduled.slice(4, 8).map((pose) => ({
    img: pose.image, 
    title: pose.sanskrit_name, 
    color: "#FFEFD6", 
    titleColor: "#5E7167", 
  }));
};
