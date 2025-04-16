import React, { useState, useRef } from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { videosData } from "../(databases)/database_reels";
import SingleReel from "../(databases)/calls_reels";
import { ThemedView } from "@/components/ThemedView";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Reels = () => {
  const insets = useSafeAreaInsets(); // Handle bottom tab padding
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 90 }; // Ensure 90% of the item is visible before playing
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={videosData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.reelContainer, { height: screenHeight - insets.bottom }]}>
            <SingleReel item={item} index={index} currentIndex={currentIndex} />
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={screenHeight} // Ensures each video fully occupies the screen
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  themedView: {
    flex: 1,
    backgroundColor: "lightblue",
},
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 55,
    marginBottom: 75,
  },
  reelContainer: {
    width: screenWidth,
    
  },
});

export default Reels;
