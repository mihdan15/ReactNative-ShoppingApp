import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Padding, Border } from "../pages/GlobalStyles";
import { Search, Loc, Feature, Newmem, Navbar } from "../src/components";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={styles.homeItem} />
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Search style={{ height: 20 }} />
      <Loc />
      <Feature />
      <Newmem />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  homeInnerPosition: {
    backgroundColor: Color.colorWhite,
    width: 500,
    left: 0,
    position: "absolute",
  },
  homeChild: {
    backgroundColor: Color.colorSeagreen,
    height: 31,
    width: 500,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeItem: {
    top: 31,
    backgroundColor: "#12a861",
    height: 332,
    width: 500,
    left: 0,
    position: "absolute",
  },
  homeInner: {
    top: 106,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 310,
  },
  home: {
    backgroundColor: "#f2f3f7",
    overflow: "hidden",
    flex: 1,
    height: 682,
    width: "100%",
  },
  rectangleView: {
    top: 425,
    height: 344,
  },
});

export default Home;
