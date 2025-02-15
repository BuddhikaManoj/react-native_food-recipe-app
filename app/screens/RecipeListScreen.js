import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* render the header component */}
      <Header headerText={"Hi, Buddy"} headerIcon={"bell-o"} />

      {/* render search filter */}
      <SearchFilter
        icon={"search"}
        placeHolder={"Enter your favourite recipe"}
      />

      {/* render categories filter */}
      <View>
        <Text style={styles.categoriesText}>Categories</Text>
        <CategoriesFilter />
      </View>

      {/* render recipes */}
      <View style={{ flex: 1 }}>
        <Text style={styles.recipesText}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  recipesText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default RecipeListScreen;
