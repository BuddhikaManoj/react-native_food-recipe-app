import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { recipeList } from "../constants/Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            style={styles.recipeCard}
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>

            <View style={styles.subContainer}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color="#f69193" />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 40 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
    marginHorizontal: 16,
  },
  subContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingText: {
    marginRight: 4,
  },
});

export default RecipeCard;
