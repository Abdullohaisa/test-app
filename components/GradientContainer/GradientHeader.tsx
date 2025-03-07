import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserImage from "../../assets/svg/user-image";
import SettingIcon from "../../assets/svg/setting";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screens } from "../../shared/token";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const GradientHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <BlurView
      intensity={20}
      tint="dark"
      style={{ ...styles.container, paddingTop: insets.top + 10 }}
    >
      <LinearGradient
        colors={["#7b00ff", "#2575fc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.rightContent}>
        <UserImage />
        <View>
          <Text style={styles.title}>Hello, John!</Text>
          <Text style={styles.desc}>Welcome to your financial insight.</Text>
        </View>
      </View>
      <View style={styles.leftSettings}>
        <SettingIcon />
      </View>
    </BlurView>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: screens.width * 0.04,
    paddingBottom: 10,
    borderRadius: 16,
    overflow: "hidden",
    // height: 100,
  },
  rightContent: {
    flexDirection: "row",
    gap: 10,
  },
  leftSettings: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  desc: {
    fontSize: 13,
    color: "#dcdcdc",
    fontWeight: "400",
  },
});
