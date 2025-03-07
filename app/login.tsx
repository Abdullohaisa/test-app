import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { screens } from "../shared/token";
import LogoIcon from "../assets/svg/logo";
import LoginForm from "../components/LoginForm/LoginForm";
import Gradient from "../shared/gradient";
import TelegramIcon from "../assets/svg/telegram";

const Login = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Gradient />
        {!isKeyboardVisible && (
          <View style={styles.logoContainer}>
            <LogoIcon />
            <Text style={styles.welcomeText}>Welcome to Liquid</Text>
            <Text style={styles.subtitleText}>
              Please sign in with your account
            </Text>
          </View>
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          keyboardVerticalOffset={20}
        >
          <LoginForm />
        </KeyboardAvoidingView>

        {!isKeyboardVisible && (
          <View style={styles.socialLoginContainer}>
            <View style={styles.orTextBox}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>Or login with</Text>
              <View style={styles.orLine} />
            </View>
            <View style={styles.buttons}>
              <Pressable style={styles.button}>
                <TelegramIcon />
              </Pressable>
              <Pressable style={styles.button}>
                <TelegramIcon />
              </Pressable>
              <Pressable style={styles.button}>
                <TelegramIcon />
              </Pressable>
            </View>
            <Text style={styles.dontText}>
              Don't Have an account yet?{" "}
              <Text style={styles.createText}>Create New</Text>
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screens.width * 0.04,
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5,
  },
  socialLoginContainer: {
    marginTop: 30,
  },
  orLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#d6d6d6",
  },
  orTextBox: { flexDirection: "row", alignItems: "center" },
  orText: { fontSize: 16, color: "#d6d6d6", paddingHorizontal: 10 },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    gap: 15,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff24",
    justifyContent: "center",
    alignItems: "center",
  },
  dontText: {
    textAlign: "center",
    fontSize: 18,
    color: "#bbbbbb",
    marginBottom: 30,
  },
  createText: {
    textDecorationLine: "underline",
    color: "#fff",
  },
});
