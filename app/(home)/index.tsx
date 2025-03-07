import { ScrollView, StyleSheet, View } from "react-native";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import SheetPanel from "../../components/SheetPanel/SheetPanel";
import GradientHeader from "../../components/GradientContainer/GradientHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <GradientHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <GradientContainer />
        <SheetPanel />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
