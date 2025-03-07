import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../../shared/input/input";
import CustomButton from "../../shared/button/button";
import { useAtom, useAtomValue } from "jotai";
import { authAtom, loginAtom } from "../../entities/auth/model/auth.state";
import { router } from "expo-router";

const LoginForm = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);
  const [seeError, setSeeError] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const submit = async () => {
    setSeeError(true);

    if (!email || !password) {
      setFormError("Please fill in all fields");
      return;
    }
    setFormError(null);
    login({ email, password });
  };

  useEffect(() => {
    if (access_token) {
      router.replace("/(home)");
    }
  }, [access_token]);

  return (
    <View style={styles.formContainer}>
      <CustomInput
        onChangeText={setEmail}
        label="Email ID"
        placeholder="vasia@pupkin.ru"
        value={email}
      />
      <CustomInput
        onChangeText={setPassword}
        label="Password"
        placeholder="12345678"
        isPassword
        value={password}
      />
      {formError && <Text style={styles.errorText}>{formError}</Text>}
      {seeError && error && !formError && (
        <Text style={styles.errorText}>{error}</Text>
      )}
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <CustomButton onPress={submit} isLoading={isLoading} text="Sign In" />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: 20,
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "right",
    // marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});
