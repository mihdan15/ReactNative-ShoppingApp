import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Padding, Border } from "../../../pages/GlobalStyles";

const Navbar = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.homeChild2} />
      <View style={[styles.groupParent, styles.parentFlexBox]}>
        <View style={styles.homeParent}>
          <Text style={[styles.home1, styles.feedTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition1]}
            source={require("../../../assets/home.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupParentSpaceBlock]}>
          <View style={[styles.feedWrapper, styles.wrapperPosition]}>
            <Text style={[styles.feed, styles.feedTypo]}>Feed</Text>
          </View>
          <Image
            style={[styles.feedIcon, styles.iconPosition]}
            source={require("../../../assets/feed.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupParentSpaceBlock]}>
          <View style={[styles.officialStoreWrapper, styles.wrapperPosition]}>
            <Text style={[styles.feed, styles.feedTypo]}>Official Store</Text>
          </View>
          <Image
            style={[styles.officialStoreIcon, styles.iconPosition1]}
            source={require("../../../assets/official-store.png")}
          />
        </View>
        <View style={[styles.wishlistParent, styles.groupParentSpaceBlock]}>
          <Text style={[styles.wishlist, styles.wrapperPosition]}>
            Wishlist
          </Text>
          <Image
            style={[styles.wishlistIcon, styles.iconPosition]}
            source={require("../../../assets/wishlist.png")}
          />
        </View>
        <View style={[styles.groupParent1, styles.groupParentSpaceBlock]}>
          <View style={[styles.transaksiWrapper, styles.wrapperPosition]}>
            <Text style={[styles.feed, styles.feedTypo]}>Transaksi</Text>
          </View>
          <Image
            style={[styles.transaksiIcon, styles.iconPosition]}
            source={require("../../../assets/transaksi.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupView: {
    width: 56,
  },
  transaksiWrapper: {
    width: 40,
    height: 11,
    left: 0,
  },
  transaksiIcon: {
    width: "60%",
    right: "20%",
    left: "20%",
  },
  groupParent1: {
    width: 40,
  },
  groupParent: {
    position: "absolute", // <-- Tambahkan ini
    bottom: 0, // <-- Tambahkan ini
    width: "100%",
    // top: 637,
    // width: 305,
  },
  wishlistIcon: {
    width: "70.59%",
    right: "17.65%",
    left: "11.76%",
  },
  wishlist: {
    fontWeight: "300",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    left: 0,
    color: Color.colorGray_100,
  },
  wishlistParent: {
    width: 35,
  },
  officialStoreIcon: {
    height: "67.77%",
    width: "42.86%",
    right: "28.57%",
    bottom: "32.23%",
    left: "28.57%",
  },
  officialStoreWrapper: {
    width: 56,
    height: 11,
    left: 0,
  },
  wrapperPosition: {
    top: 35,
    position: "absolute",
  },
  feedIcon: {
    right: "0%",
    left: "0%",
    width: "100%",
    bottom: "31.43%",
    height: "68.57%",
  },
  iconPosition: {
    bottom: "31.43%",
    height: "68.57%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeParent: {
    height: 35,
    width: 35,
  },
  groupParentSpaceBlock: {
    marginLeft: 30,
    height: 35,
  },
  groupContainer: {
    width: 35,
  },
  iconPosition1: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  feedTypo: {
    fontWeight: "300",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    left: 0,
  },
  feed: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_4xs,
    top: 0,
    position: "absolute",
  },
  feedWrapper: {
    left: 2,
    width: 22,
    height: 11,
  },
  homeIcon: {
    height: "65.32%",
    width: "80.82%",
    right: "11.49%",
    bottom: "34.68%",
    left: "7.69%",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  groupParent: {
    top: 720,
    width: 405,
  },
  homeChild2: {
    top: 710,
    backgroundColor: "#fdfdfd",
    width: "100%",
    height: 70,
    position: "absolute",
  },
  home1: {
    top: 21,
    color: Color.colorSeagreen,
    position: "absolute",
  },
});

export default Navbar;
