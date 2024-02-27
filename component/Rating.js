import React from "react";
import { View, Image, StyleSheet } from "react-native";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Image
          key={i}
          source={require("../assets/PageClass/bookmark-favorite-rating-star-svgrepo-com.png")}
          style={styles.star}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Image
          key="half"
          source={require("../assets/PageClass/half-rating-star-svgrepo-com.png")}
          style={styles.star}
        />
      );
    }

    const remainingStars = 5 - (filledStars + (hasHalfStar ? 1 : 0));

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Image
          key={`empty-${i}`}
          source={require("../assets/PageClass/favorite-no-rating-star-svgrepo-com.png")}
          style={styles.star}
        />
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    width: 10,
    height: 10,
    marginRight: 2,
  },
});

export default StarRating;
