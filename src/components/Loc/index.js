import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Padding, Border } from "../../../pages/GlobalStyles";

const Loc = () => {
  return (
    <View style={[styles.iconPinOutlineParent, styles.parentFlexBox]}>
      <Image
        style={styles.iconPinOutline}
        source={require("../../../assets/pin.png")}
      />
      <Text style={[styles.dikirimKeMalangContainer, styles.textTypo]}>
        <Text style={styles.dikirimKe}>{`Dikirim ke `}</Text>
        <Text style={styles.malang}>Malang</Text>
      </Text>
      <Image
        style={styles.iconArrowIosDownward}
        source={require("../../../assets/downward.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPinOutline: {
    zIndex: 0,
    height: 11,
    width: 9,
  },
  dikirimKe: {},
  malang: {
    fontWeight: "700",
  },
  dikirimKeMalangContainer: {
    color: Color.colorWhite,
    marginLeft: 4,
    zIndex: 1,
    textAlign: "center",
  },
  iconArrowIosDownward: {
    height: "27.07%",
    width: "6.5%",
    top: "58.33%",
    right: "-8.5%",
    bottom: "14.6%",
    left: "102%",
    zIndex: 2,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPinOutlineParent: {
    top: 84,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
});

export default Loc;
