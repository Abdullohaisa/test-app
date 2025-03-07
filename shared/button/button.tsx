import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  PressableProps,
  ActivityIndicator,
} from "react-native";
import React, { useRef } from "react";

interface ButtonProps extends PressableProps {
  isLoading?: boolean;
  text: string;
}

const CustomButton = ({ isLoading, text, ...props }: ButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...props}
      >
        {!isLoading ? (
          <Text style={styles.buttonText}>{text}</Text>
        ) : (
          <ActivityIndicator size={35} color={"#fff"} />
        )}
      </Pressable>
    </Animated.View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#46B2FF",
    height: 57,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
