import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const SearchFilter = ({ icon, placeHolder }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}>{placeHolder}</TextInput>
      <FontAwesome name={icon} size={20} color="#f96163" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginVertical: 16,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  textInput: {
    fontSize: 16,
    color: "#808080",
  },
});

export default SearchFilter;
