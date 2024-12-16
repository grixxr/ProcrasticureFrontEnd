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

export default function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConf, setPwConf] = useState("");

  const toSignUp = () => {
    navigation.goBack();
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
        style={{
          width: "80%",
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderColor: "#373636",
          color: "#F0F3F4",
        }}
        placeholder="Email"
        placeholderTextColor={"#F0F3F4"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          width: "80%",
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderColor: "#373636",
          color: "#F0F3F4",
        }}
        placeholder="Password"
        placeholderTextColor={"#F0F3F4"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={pw}
        onChangeText={(text) => setPw(text)}
      />
      <TextInput
        style={{
          width: "80%",
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderColor: "#373636",
          color: "#F0F3F4",
        }}
        placeholder="Password Confirmation"
        placeholderTextColor={"#F0F3F4"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={pwConf}
        onChangeText={(text) => setPwConf(text)}
      />

      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: "#373636",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 16,
          borderRadius: 8,
          overflow: "hidden",
          marginVertical: 50,
        }}
        onPress={toSignUp}
      >
        <Text
          style={{
            color: "#F5F5F5",
            padding: 10,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
