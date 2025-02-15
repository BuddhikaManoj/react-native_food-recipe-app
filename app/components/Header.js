import { StyleSheet, View, Text, StatusBar } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.text}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 700,
  },
});

export default Header;
