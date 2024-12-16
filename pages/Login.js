import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from "react-native";

const LoginPage = ({}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate("Home");
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
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#F0F3F4"}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
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

// Main App function
export default function App() {
  return (
    <LoginPage navigation={{ navigate: () => console.log("Navigating...") }} />
  );
}

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
    borderColor: "gray",
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
