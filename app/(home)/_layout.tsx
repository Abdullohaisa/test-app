import { Tabs } from "expo-router/tabs";
import { useAtomValue } from "jotai";
import React from "react";
import { authAtom } from "../../entities/auth/model/auth.state";
import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const Rayout = () => {
  const { access_token } = useAtomValue(authAtom);
  if (!access_token) {
    return <Redirect href={"/login"} />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Rayout;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 80,
    justifyContent: "center",
  },
  tabBarItemStyle: {
    paddingTop: 10,
    height: 70,
  },
});
