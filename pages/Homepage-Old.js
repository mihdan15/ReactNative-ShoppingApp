import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Search, Card } from "../src/components";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <Search height={20} />

      {/* Top Ad Section */}
      <View style={styles.adSection}>{/* ... */}</View>

      {/* Grid of Icons */}
      <View style={styles.grid}>
        {/* Example of an icon */}
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png?v=638198273740000000",
            }}
            style={styles.gridItemImage}
          />
          <Text>Grid Item Name</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png?v=638198273740000000",
            }}
            style={styles.gridItemImage}
          />
          <Text>Grid Item Name</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png?v=638198273740000000",
            }}
            style={styles.gridItemImage}
          />
          <Text>Grid Item Name</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png?v=638198273740000000",
            }}
            style={styles.gridItemImage}
          />
          <Text>Grid Item Name</Text>
        </View>
        {/* Repeat for other items */}
      </View>

      {/* Ad Banners */}
      <View style={styles.adBanner}>{/* ... */}</View>

      {/* Live Now Section */}
      <View style={styles.liveNow}>
        <Text>🔴 LIVE NOW</Text>
      </View>

      <Card
        title="Contoh Judul"
        imageUrl="https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png"
        description="Ini adalah deskripsi dari card."
      />

      {/* Other sections... */}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  adSection: {
    height: 100,
    // ... other styles
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "25%", // 4 items per row
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  gridItemImage: {
    width: 50,
    height: 50,
  },
  adBanner: {
    height: 100,
    // ... other styles
  },
  liveNow: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  // ... other styles
});
