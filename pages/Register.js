import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
} from "react-native";
import { Register as registerAPI } from "../API/API";

export default function Register() {
  const navigation = useNavigation();

  const [regData, setRegData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSet = (key, value) => {
    setRegData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const toSignUp = async () => {
    await registerAPI(regData);
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#262626",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#F0F3F4"
        keyboardType="email-address"
        autoCapitalize="none"
        value={regData.email}
        onChangeText={(text) => handleSet("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#F0F3F4"
        secureTextEntry
        value={regData.password}
        onChangeText={(text) => handleSet("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password Confirmation"
        placeholderTextColor="#F0F3F4"
        secureTextEntry
        value={regData.confirm_password}
        onChangeText={(text) => handleSet("confirm_password", text)}
      />

      <TouchableOpacity style={styles.button} onPress={toSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 45,
    borderColor: "#373636",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "#F0F3F4",
  },
  button: {
    width: "80%",
    backgroundColor: "#373636",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 50,
  },
  buttonText: {
    color: "#F5F5F5",
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
});
