import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ArrowBottomIcon from "../../assets/svg/arrow-bottom";
import * as Progress from "react-native-progress";
import { screens } from "../../shared/token";

const GradientStats = () => {
  const [progress] = useState<number>(0.75);
  return (
    <View style={styles.container}>
      <View style={styles.moneyBox}>
        <View style={styles.labels}>
          <Text style={styles.label}>Available Funds </Text>
          <View style={styles.dateButton}>
            <Text style={styles.labelDate}>Month</Text>
            <ArrowBottomIcon />
          </View>
        </View>
        <Text style={styles.moneyText}>$3,234</Text>
      </View>

      <View style={styles.staticBox}>
        <Progress.Circle
          size={200}
          progress={progress}
          thickness={20}
          color="#ffffff"
          borderWidth={0}
          unfilledColor="#9500ff84"
          showsText
          strokeCap="round"
          formatText={() => `${Math.round(progress * 100)}%`}
        />
      </View>
    </View>
  );
};

export default GradientStats;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  moneyBox: {
    height: 100,
    backgroundColor: "#ffffff4b",
    borderRadius: 20,
    padding: 13,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    color: "#ffffff",
  },
  dateButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  labelDate: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
  moneyText: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: -0.5,
    color: "#FFD700",
  },
  staticBox: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
