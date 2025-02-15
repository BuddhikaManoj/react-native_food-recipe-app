import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { categories } from "../constants/Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              style={[
                styles.categoryCard,
                { backgroundColor: index === 0 ? "#f69193" : "#fff" },
              ]}
            >
              <Text
                style={[
                  styles.categoryCardText,
                  { color: index === 0 && "#fff" },
                ]}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  categoryCard: {
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginVertical: 16,
    elevation: 5,
  },
  categoryCardText: {
    fontSize: 16,
  },
});

export default CategoriesFilter;
