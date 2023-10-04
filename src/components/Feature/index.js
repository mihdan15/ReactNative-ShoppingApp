import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, Padding, Border } from "../../../pages/GlobalStyles";

const Search = () => {
  return (
    <View>
      <Image
        style={[styles.cover1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/abdb00b3dc5d45d88672bed3e63fdad2-1.png")}
      />
      <Image
        style={[styles.cover2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/3ed1760d4d404393ad4c4a1e78fa24e4-1.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/1b1f3e317bf240c2b930289934c6e57e-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Promo Hari
ini`}</Text>
        </View>
        <View style={[styles.viewParent2, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/1365f379c59e45d79ed11d478d208bca-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>Lihat Semua</Text>
        </View>
        <View style={[styles.viewParent2, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/c6e1b5f9b4cb4b9ab63cb0f967f5cb40-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Belanja 2
Jam Tiba`}</Text>
        </View>
        <View style={[styles.viewParent2, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/ee04c2568a1849299ac7bdd606c4f274-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>Kesehatan</Text>
        </View>
        <View style={[styles.viewParent2, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/a6571b975cb441588d652acb1c810e53-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Top-Up &
Tagihan`}</Text>
        </View>
        <View style={[styles.viewParent2, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/cd85cd88d34d4742ad44817522bcf415-1.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Travel &
Entertain...`}</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameParentPosition]}>
        <View style={styles.parentLayout}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/download-2.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Official
Store`}</Text>
        </View>
        <View style={[styles.download3Parent, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/download-3.png")}
          />
          <Text style={[styles.liveShopping, styles.promoHariIniTypo]}>
            Live Shopping
          </Text>
        </View>
        <View style={[styles.download3Parent, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/ee04c2568a1849299ac7bdd606c4f274-11.png")}
          />
          <Text style={styles.promoHariIniTypo}>Kesehatan</Text>
        </View>
        <View style={[styles.download3Parent, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/download-5.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Top-Up &
Tagihan`}</Text>
        </View>
        <View style={[styles.download3Parent, styles.parentLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../../assets/download-6.png")}
          />
          <Text style={styles.promoHariIniTypo}>{`Travel &
Entertain...`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover1: {
    left: 13,
  },
  cover2: {
    left: 318,
  },
  iconLayout: {
    height: 130,
    width: 330,
    top: 196,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  frameParent: {
    top: 122,
  },
  frameParentPosition: {
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  parentLayout: {
    width: 67,
    alignItems: "center",
  },
  imageIcon: {
    height: 40,
    width: 40,
  },
  viewParent: {
    alignItems: "center",
  },
  viewParent2: {
    marginLeft: 12,
    alignItems: "center",
  },
  promoHariIniTypo: {
    marginTop: 7,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorGray_100,
  },
  frameGroup: {
    top: 340,
  },
  liveShopping: {
    alignSelf: "stretch",
  },
  download3Parent: {
    marginLeft: 10,
  },
});

export default Search;
