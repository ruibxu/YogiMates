// YogaVideoCarousel.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const YogaVideoCarousel = ({ videos, onVideoPress }) => {
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity onPress={() => onVideoPress(item.id.videoId)}>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 275 }}>
        <Image
          source={{ uri: item.snippet.thumbnails.default.url }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
        <Text style={{ position: 'absolute', bottom: 10, left: 10, right: 10, textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: 5, borderRadius: 5 }}>{item.snippet.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Carousel
      data={videos}
      renderItem={renderVideoItem}
      sliderWidth={300}
      itemWidth={300}
      loop={true}
      autoplay={true}
    />
  );
};

export default YogaVideoCarousel;
