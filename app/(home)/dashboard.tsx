import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../shared/button/button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";

const Dashboard = () => {
  const logout = useSetAtom(logoutAtom);
  return (
    <View style={styles.container}>
      <CustomButton text="Logout" onPress={logout} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
