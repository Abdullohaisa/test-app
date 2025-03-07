import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import EyeOpenIcon from "../../assets/svg/eye-open";
import EyeCloseIcon from "../../assets/svg/eye-close";

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

const CustomInput = ({
  label,
  error,
  isPassword,
  ...props
}: CustomInputProps) => {
  const [isPaswordVisible, setIsPaswordVisible] = useState<boolean>(false);
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={{ position: "relative" }}>
        <TextInput
          secureTextEntry={isPassword && !isPaswordVisible}
          style={[styles.input, error && styles.inputError]}
          {...props}
        />
        {isPassword && (
          <Pressable
            style={styles.eyeButton}
            onPress={() => setIsPaswordVisible(($) => !$)}
          >
            {isPaswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    height: 58,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
  eyeButton: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -15 }],
  },
});
