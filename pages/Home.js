import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import Footer from "./Footer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
    // Handle logout logic here
  };

  const [selectedDate, setSelectedDate] = useState(
    getFormatedDate(new Date(), "YYYY-MM-DD")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      {/* Title and Log Out Icon */}
      <View style={styles.title}>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>Procrastiture</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Picker */}
      <View style={styles.contentContainer}>
        <DatePicker
          options={{
            backgroundColor: "#2c2c2e",
            textHeaderColor: "#FFFFFF",
            textDefaultColor: "#F6E7C1",
            selectedTextColor: "#fff",
            mainColor: "#F4722B",
            textSecondaryColor: "#D6C7A1",
            borderColor: "#FFFFFF",
          }}
          current={selectedDate}
          selected={selectedDate}
          mode="calendar"
          minuteInterval={30}
          onDateChange={handleDateChange}
          style={{ borderRadius: 10 }}
        />
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    padding: 16,
  },
  title: {
    position: "absolute",
    top: 50,
    width: "100%",
    zIndex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  titleText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "#E74C3C",
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
