import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false, navigationBarColor: "#fff" }}>
        <Stack.Screen
          name="login"
          options={{ navigationBarColor: "#192f6a" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default Layout;
