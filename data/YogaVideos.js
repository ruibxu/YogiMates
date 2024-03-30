// YogaVideos.js

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const YogaVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYogaVideos();
  }, []);

  const fetchYogaVideos = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: "yoga",
            maxResults: 10, // Change this number as needed
            key: "AIzaSyBAQ2X04DRqM8cCtNyInq00nCKdonQ-HaQ", // Replace with your API key
          },
        }
      );
      setVideos(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const renderVideoItem = ({ item }) => (
    <ScrollView>
      <TouchableOpacity onPress={() => handleVideoPress(item.id.videoId)}>
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
        >
          <Image
            source={{ uri: item.snippet.thumbnails.default.url }}
            style={{ width: 120, height: 90, marginRight: 10 }}
          />
          <Text>{item.snippet.title}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

  const handleVideoPress = (videoId) => {
    console.log("Video ID:", videoId);
    // Implement navigation or video player integration here
  };

  <FlatList
    data={videos}
    renderItem={renderVideoItem}
    keyExtractor={(item) => item.id.videoId}
  />;

  //   const handleVideoPress = (videoId) => {
  //     // Implement navigation or video player integration here
  //     console.log('Video ID:', videoId);
  //   };

  return (
    <FlatList
      data={videos}
      renderItem={renderVideoItem}
      keyExtractor={(item) => item.id.videoId}
    />
  );
};

export default YogaVideos;
