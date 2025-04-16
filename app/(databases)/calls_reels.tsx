import React, { useRef, useEffect, useState } from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons, FontAwesome, Fontisto } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const SingleReel = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);
  const isPlaying = currentIndex === index;
  const [followed, setFollowed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying && !isPaused) {
        videoRef.current.playAsync();
      } else {
        videoRef.current.pauseAsync();
      }
    }
  }, [isPlaying, isPaused, currentIndex]);

  // Use useFocusEffect to handle component focus
  useFocusEffect(
    React.useCallback(() => {
      // Play the video when the component is focused
      if (videoRef.current && isPlaying && !isPaused) {
        videoRef.current.playAsync();
      }

      // Pause the video when the component is unfocused
      return () => {
        if (videoRef.current) {
          videoRef.current.pauseAsync();
        }
      };
    }, [isPlaying, isPaused])
  );

  return (
    <ThemedView style={styles.themedView}>
      <View style={styles.container}>
        <TouchableOpacity 
          activeOpacity={1} 
          style={styles.touchable}
          onPress={() => {
            setIsPaused(!isPaused);
            if (videoRef.current) {
              if (isPaused) {
                videoRef.current.playAsync();
              } else {
                videoRef.current.pauseAsync();
              }
            }
          }}
        >
          <Video
            ref={videoRef}
            source={typeof item.video === "string" ? { uri: item.video } : item.video}
            resizeMode={ResizeMode.COVER}
            shouldPlay={isPlaying && !isPaused}
            isLooping
            style={styles.video}
          />
          {isPaused && (
            <Ionicons
              name="pause"
              size={80}
              color="white"
              style={styles.pauseIcon}
            />
          )}
        </TouchableOpacity>

        {/* Bottom Right Icons */}
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback onPress={() => setFollowed(!followed)}>
            <View style={styles.iconWithText}>
              <Ionicons name={followed ? "person-add" : "person-add-outline"} size={28} color={followed ? "black" : "white"} />
              <Text style={styles.iconText}>12.5K</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setLiked(!liked)}>
            <View style={styles.iconWithText}>
              <FontAwesome name={liked ? "heart" : "heart-o"} size={28} color={liked ? "red" : "white"} />
              <Text style={styles.iconText}>1.2M</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.iconWithText}>
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Text style={styles.iconText}>8.4K</Text>
          </View>

          <Ionicons name="send" size={28} color="white" style={styles.icon} />
          <Ionicons name="ellipsis-vertical" size={28} color="white" style={styles.icon} />
          <Fontisto name="applemusic" size={25} color="white" style={styles.icon} />
        </View>

        {/* User Details */}
        <View style={styles.userDetails}>
          <Image 
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }} 
            style={styles.profileImage} 
          />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>@username</Text>
            <Text style={styles.songDetails}>🎵 Song Name - Artist</Text>
          </View>
        </View>
      
      </View>
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Reels</Text>
        <Ionicons name="camera-outline" size={28} color="white" style={styles.cameraIcon} />
      </View>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  themedView: {
    flex: 1,
    backgroundColor: "black",
  },
  textContainer: {
    flexDirection: "column",
  },
  songDetails: {
    fontSize: 10,
    color: "white",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
  },
  cameraIcon: {
    marginRight: 10,
    color: "white",
    marginLeft: "auto",
    marginBottom: 20,
  },
  container: {
    width: screenWidth,
    height: screenHeight,
    position: "relative",
  },
  touchable: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  video: {
    width: "100%",
    height: "85%",
    position: "absolute",
  },
  iconContainer: { position: "absolute", right: 10, bottom: 80, alignItems: "center" },
  iconWithText: { alignItems: "center", marginBottom: 15 },
  iconText: { color: "white", fontSize: 12, marginTop: 5 },
  icon: { marginBottom: 15 },
  userDetails: {
    position: "absolute",
    bottom: 120,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  pauseIcon: {
    position: "absolute",
    top: "40%",
    left: "42%",
    opacity: 0.7,
  },
});

export default SingleReel;