import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const initialGridImages = [
  {
    id: 1,
    mainSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 2,
    mainSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 3,
    mainSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 4,
    mainSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 5,
    mainSrc: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 6,
    mainSrc: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 7,
    mainSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 8,
    mainSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
  {
    id: 9,
    mainSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
    altSrc: 'https://images.unsplash.com/photo-1518715308788-300e1e1e2d4c?auto=format&fit=crop&w=200&q=80',
    isFlipped: false,
    scale: 1,
  },
];

export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          const newScale = Math.min(image.scale * 1.2, 2); // max scale is 2
          return {
            ...image,
            isFlipped: !image.isFlipped,
            scale: newScale,
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.triangle} />

      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yIx_1bTcgD8-Ru-zZeAsYL3STKv5fKVAGw&s" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.pill}>
        <MaterialIcons name="favorite" size={24} color="white" />
        <Text style={styles.pillText}>105841112222</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.redText}>Dzulviana</Text>
      </View>

      <View style={styles.circle} />

      <View style={styles.gridContainer}>
        {gridImages.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
            style={styles.gridCell}
          >
            <Image
              source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
              style={[styles.gridImage, { transform: [{ scale: image.scale }] }]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff0f5",
    paddingVertical: 60,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 80,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffb6b9",
    marginBottom: 20,
  },
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#fcd5ce",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcd5ce",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pillText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  textContainer: {
    backgroundColor: "#cdb4db",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  redText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#b5ead7",
    borderRadius: 100,
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
    marginTop: 20,
  },
  gridCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#fff0f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  }
});
