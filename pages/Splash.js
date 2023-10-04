import React, { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const Navigation = useNavigation();

  useEffect(() => {
    // Simulasi loading dengan setTimeout
    const timer = setTimeout(() => {
      Navigation.navigate("Homepage");
    }, 1500);

    return () => clearTimeout(timer); // Tunggu 3 detik sebelum pindah ke homepage
  }, [Navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://seeklogo.com/images/P/pdi-love-logo-C8738BCFAD-seeklogo.com.png?v=638198273740000000",
        }} // URL gambar placeholder
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>Perjuangan SuperApp</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
    marginLeft: 10,
    fontFamily: "sans-serif-medium", // Gantikan dengan font lain jika Anda suka
  },
});
