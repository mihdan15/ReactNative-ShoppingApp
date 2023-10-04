import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ title, imageUrl, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#777",
  },
});

export default Card;
