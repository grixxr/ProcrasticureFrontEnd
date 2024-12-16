import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";

export default function ToDoList() {
  const navigation = useNavigation();

  // Handle Logout
  const handleLogout = () => {
    navigation.navigate("Login");
    // Handle logout logic here
  };

  // Get current date dynamically
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Static data for the To-Do List
  const toDoList = [
    { id: "1", task: "Project", status: "pending", deadline: "11:59pm" },
    { id: "2", task: "PIT", status: "done", deadline: "9:30am" },
    { id: "3", task: "Activity 1", status: "pending", deadline: "9:00pm" },
    { id: "4", task: "Project", status: "cancel", deadline: "12:00am" },
    { id: "5", task: "Assignment", status: "pending", deadline: "6:00pm" },
    { id: "6", task: "Review", status: "done", deadline: "10:00pm" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.task}</Text>
      <Text style={styles.cell}>{item.status}</Text>
      <Text style={styles.cell}>{item.deadline}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title and Log Out Icon */}
      <View style={styles.title}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Text style={styles.titleText}>Procrastiture</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date */}
      <Text style={styles.dateText}>Date: {formattedDate}</Text>

      {/* To-Do List Centered */}
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>To Do</Text>
          <Text style={styles.headerCell}>Status</Text>
          <Text style={styles.headerCell}>Deadline</Text>
        </View>

        {/* Table Content */}
        <FlatList
          data={toDoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }} // Ensures the list takes the full table width
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
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#1c1c1e",
    padding: 16,
  },
  title: {
    position: "absolute", // Fix title to the top
    top: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
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
  dateText: {
    fontSize: 16,
    color: "#bbb",
    marginVertical: 20,
    textAlign: "center",
  },
  tableContainer: {
    width: "90%",
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 10,
  },
  headerCell: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  cell: {
    fontSize: 16,
    color: "white",
    flex: 1,
    textAlign: "center",
  },
});
