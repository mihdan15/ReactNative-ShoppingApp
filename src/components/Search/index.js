import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Padding, Border } from "../../../pages/GlobalStyles";

const Search = () => {
  return (
    <View style={[styles.formInputParent, styles.frameParentPosition]}>
      <View style={styles.formInput}>
        <Image
          style={styles.vectorIcon}
          source={require("../../../assets/vector.png")}
        />
        <Text style={styles.cariDiTokopedia}>Cari di Tokopedia</Text>
      </View>
      <Image
        style={styles.iconEmailOutline}
        source={require("../../../assets/email.png")}
      />
      <Image
        style={styles.iconBellOutline}
        source={require("../../../assets/bell.png")}
      />
      <Image
        style={styles.iconShoppingCartOutline}
        source={require("../../../assets/cart.png")}
      />
      <Image
        style={styles.frameChild}
        source={require("../../../assets/menu.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  formInputParent: {
    top: 48,
    alignItems: "center",
    width: 380,
  },
  formInput: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flex: 1,
  },
  vectorIcon: {
    height: 9,
    width: 9,
  },
  cariDiTokopedia: {
    fontSize: FontSize.size_xs,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  iconEmailOutline: {
    width: 18,
    height: 14,
    marginLeft: 12,
  },
  iconBellOutline: {
    width: 15,
    height: 17,
    marginLeft: 12,
  },
  iconShoppingCartOutline: {
    width: 17,
    height: 15,
    marginLeft: 12,
  },
  frameChild: {
    width: 13,
    height: 12,
    marginLeft: 12,
  },
});

export default Search;
