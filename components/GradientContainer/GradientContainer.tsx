import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import GradientHeader from "./GradientHeader";
import { screens } from "../../shared/token";
import GradientStats from "./GradientStats";

const GradientContainer = () => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc", "#192f6a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ ...styles.gradient, paddingTop: insets.top + 70 }}
    >
      <GradientStats />
    </LinearGradient>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({
  gradient: {
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: screens.width * 0.03,
  },
});
