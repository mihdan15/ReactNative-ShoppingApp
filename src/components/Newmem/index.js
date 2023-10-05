import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Padding, Border } from "../../../pages/GlobalStyles";

const Newmem = () => {
  return (
    <View style={{ top: 30 }}>
      <Text style={[styles.traktiranPenggunaBaru, styles.berakhirDalamClr]}>
        Traktiran Pengguna Baru
      </Text>
      <Text style={[styles.berakhirDalam, styles.lihatSemuaTypo]}>
        Berakhir dalam
      </Text>
      <View style={styles.iconClockOutlineParent}>
        <Image
          style={styles.iconClockOutline}
          source={require("../../../assets/clock.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>12 : 47 : 16</Text>
      </View>
      <View style={[styles.homeChild1, styles.homeChild1Position]} />
      <Image
        style={[
          styles.a5b170e6474aB828Edef947a3aIcon,
          styles.homeChild1Position,
        ]}
        resizeMode="cover"
        source={require("../../../assets/1182a5b170e6474ab828edef947a3aae-1.png")}
      />
      <Text style={[styles.lihatSemua, styles.home1Clr]}>Lihat Semua</Text>
      <View style={[styles.minyakParent, styles.parentPosition]}>
        <Image
          style={styles.minyakIcon}
          resizeMode="cover"
          source={require("../../../assets/minyak.png")}
        />
        <Text style={[styles.rp1000, styles.rp1000Position]}>Rp 1.000</Text>
        <Text style={[styles.segeraHabis, styles.segeraPosition]}>
          Segera Habis
        </Text>
        <Text style={[styles.rp49000, styles.rp49000Position]}>Rp 49.000</Text>
        <View style={[styles.wrapper, styles.wrapperPosition1]}>
          <Text style={[styles.text1, styles.textClr]}>98%</Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          source={require("../../../assets/group-3.png")}
        />
      </View>
      <View style={[styles.rp1000Parent, styles.parentPosition]}>
        <Text style={[styles.rp10001, styles.rp1000Position]}>Rp 1.000</Text>
        <Text style={[styles.segeraHabis1, styles.segeraPosition]}>
          Segera Habis
        </Text>
        <Text style={[styles.rp17777, styles.rp49000Typo]}>Rp 17.777</Text>
        <View style={[styles.container, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.textClr]}>94%</Text>
        </View>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          source={require("../../../assets/group-3.png")}
        />
        <Image
          style={[styles.niveaIcon, styles.frameItemPosition]}
          resizeMode="cover"
          source={require("../../../assets/nivea.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  niveaIcon: {
    width: 109,
    height: 113,
    left: 0,
    top: 0,
  },
  frameInner: {
    zIndex: 4,
    position: "absolute",
  },
  frameLayout: {
    width: 89,
    top: 153,
    left: 5,
    height: 11,
  },
  wrapperLayout: {
    width: 23,
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_10xs,
    top: 133,
    left: 5,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    zIndex: 3,
    position: "absolute",
  },
  rp49000Typo: {
    textDecoration: "line-through",
    left: 34,
    top: 135,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  rp1000Parent: {
    left: 235,
    height: 204,
    width: 107,
    padding: Padding.p_10xs,
    top: 454,
  },
  rp10001: {
    zIndex: 0,
  },
  segeraHabis1: {
    fontWeight: "600",
    textAlign: "left",
    zIndex: 1,
  },
  rp17777: {
    zIndex: 2,
    position: "absolute",
  },
  wrapper: {
    width: 23,
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_10xs,
    top: 133,
    left: 5,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperPosition1: {
    zIndex: 4,
    position: "absolute",
  },
  textClr: {
    color: Color.colorIndianred,
    fontSize: FontSize.size_5xs,
  },
  wrapperPosition: {
    top: 24,
    position: "absolute",
  },
  minyakParent: {
    left: 121,
    height: 204,
    width: 107,
    padding: Padding.p_10xs,
    top: 454,
  },
  parentPosition: {
    padding: Padding.p_10xs,
    top: 454,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
  },
  minyakIcon: {
    width: 103,
    height: 105,
    zIndex: 0,
  },
  rp1000: {
    zIndex: 1,
  },
  segeraHabis: {
    fontWeight: "600",
    textAlign: "left",
    zIndex: 2,
  },
  rp49000: {
    textDecoration: "line-through",
    left: 34,
    top: 135,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  text1: {
    fontWeight: "600",
    textAlign: "left",
  },
  a5b170e6474aB828Edef947a3aIcon: {
    width: 130,
    height: 240,
  },
  lihatSemua: {
    left: 340,
    top: 419,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
  },
  homeChild1: {
    backgroundColor: "#007028",
    height: 300,
    width: "100%",
  },
  homeChild1Position: {
    top: 441,
    left: 0,
    position: "absolute",
  },
  home1Clr: {
    color: Color.colorSeagreen,
    position: "absolute",
  },
  lihatSemuaTypo: {
    top: 419,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  traktiranPenggunaBaru: {
    top: 397,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    left: 13,
  },
  berakhirDalam: {
    left: 14,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  iconClockOutline: {
    width: 11,
    height: 11,
  },
  text: {
    color: "#fdfeff",
    marginLeft: 3,
    fontWeight: "700",
    textAlign: "center",
  },
  iconClockOutlineParent: {
    top: 417,
    left: 92,
    borderRadius: 10,
    backgroundColor: "#e62b58",
    width: 76,
    paddingHorizontal: 4,
    paddingVertical: 0,
    height: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  berakhirDalamClr: {
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  rp1000Position: {
    color: Color.colorDarkslategray_200,
    left: 5,
    top: 117,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  segeraPosition: {
    color: Color.colorGray_200,
    top: 166,
    left: 5,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rp49000Position: {
    zIndex: 3,
    position: "absolute",
  },
  frameItemPosition: {
    zIndex: 5,
    position: "absolute",
  },
  frameItem: {
    width: 89,
    top: 153,
    left: 5,
    height: 11,
  },
});

export default Newmem;
