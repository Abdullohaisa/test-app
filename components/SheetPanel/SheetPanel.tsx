import { Image, StyleSheet, Text, View } from "react-native";
import { screens } from "../../shared/token";

const SheetPanel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Goals</Text>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.box}>
          <Image
            resizeMode="contain"
            source={require("../../assets/box.png")}
          />
          <View style={{ gap: 10 }}>
            <Text style={styles.boxTitle}>Food</Text>
            <Text style={styles.boxDesc}>You are almost out of budget</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SheetPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: screens.width * 0.04,
    marginTop: 10,
    borderRadius: 30,
    // height: 400,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    textAlign: "left",
    marginBottom: 20,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  boxTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  boxDesc: {
    fontSize: 14,
    fontWeight: "400",
    color: "red",
  },
});
