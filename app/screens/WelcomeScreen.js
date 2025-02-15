import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("RecipeList");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/welcome1.jpg")}
      />
      <Text style={styles.mainText}>Premium Recipes</Text>
      <Text style={styles.subText}>Cook like a chef</Text>

      <TouchableOpacity style={styles.letsGo} onPress={handlePress}>
        <Text style={styles.letsGoText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "65%",
    width: "100%",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
  },
  mainText: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
    marginTop: 30,
  },
  subText: {
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    color: "#000",
    marginTop: 30,
    marginBottom: 20,
  },
  letsGo: {
    backgroundColor: "tomato",
    borderRadius: 18,
    paddingVertical: 18,
    width: "70%",
    alignItems: "center",
  },
  letsGoText: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
  },
});

export default WelcomeScreen;
