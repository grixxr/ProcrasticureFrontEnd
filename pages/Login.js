import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Alert,
} from "react-native";
import { Login } from "../API/API";

const LoginPage = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSet = (key, value) => {
    setUserData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleLogin = async () => {
    const { email, password } = userData;

    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    try {
      // Call the Login function and check its response
      const result = await Login(userData);

      if (result.success) {
        // If login is successful, navigate to Home
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Home");
      } else {
        // If login fails, show an error message
        Alert.alert(
          "Error",
          result.error || "Invalid email or password. Please try again."
        );
      }
    } catch (error) {
      // Catch any unexpected errors
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
      console.error("Unexpected Error:", error);
    }
  };

  const toRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}></View>

      <Text
        style={{
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          marginBottom: 100,
        }}
      >
        Procrastiture
      </Text>

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#F0F3F4"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={userData.email}
        onChangeText={(text) => handleSet("email", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#F0F3F4"}
        secureTextEntry
        value={userData.password}
        onChangeText={(text) => handleSet("password", text)}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSignUpContainer}
        onPress={toRegister}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#262626",
  },
  logoContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F0F3F4",
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: "#373636",
    color: "#F0F3F4",
  },
  buttonContainer: {
    width: "80%",
    backgroundColor: "#41ABE6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonSignUpContainer: {
    width: "80%",
    backgroundColor: "#373636",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonText: {
    color: "#F5F5F5",
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  Text: {
    color: "#F0F3F4",
  },
});

export default LoginPage;
