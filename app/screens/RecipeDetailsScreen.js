import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="#fff" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="#fff" />
      </SafeAreaView>
      <View style={styles.subContainer}>
        <View style={styles.secondSubContainer}>
          <Image style={styles.image} source={item.image} />
        </View>

        {/* recipe name */}
        <Text style={styles.recipeName}>{item.name}</Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* recipe description */}
            <Text style={styles.recipeDescription}>{item.description}</Text>

            {/* extra details */}
            <View style={styles.extraDetailsContainer}>
              <View
                style={[
                  styles.extraDetailsSubContainer,
                  { backgroundColor: "rgba(255, 0, 0, 0.38)" },
                ]}
              >
                <FontAwesome name="clock-o" size={30} color="black" />
                <Text style={{ fontWeight: 400, fontSize: 20 }}>
                  {item.time}
                </Text>
              </View>

              <View
                style={[
                  styles.extraDetailsSubContainer,
                  { backgroundColor: "rgba(135, 206, 235, 0.8)" },
                ]}
              >
                <FontAwesome name="cutlery" size={30} color="brown" />
                <Text style={{ fontWeight: 400, fontSize: 20 }}>
                  {item.difficulty}
                </Text>
              </View>

              <View
                style={[
                  styles.extraDetailsSubContainer,
                  { backgroundColor: "rgba(255, 165, 0, 0.48)" },
                ]}
              >
                <FontAwesome5 name="fire" size={30} color="red" />
                <Text style={{ fontWeight: 400, fontSize: 20 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* recipe ingredients */}
            <View style={styles.recipeIngredients}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 4,
                  }}
                  key={index}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                    }}
                  ></View>
                  <Text style={{ fontSize: 18, marginLeft: 6 }}>
                    {ingredient}
                  </Text>
                </View>
              ))}
            </View>

            {/* recipe steps */}
            <View style={styles.recipeIngredients}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Steps:</Text>

              {item.steps.map((step, index) => (
                <Text
                  key={index}
                  style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                >{`${index + 1}. ${step}`}</Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  extraDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  extraDetailsSubContainer: {
    width: "28%",
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
  },
  recipeIngredients: {
    alignSelf: "flex-start",
    marginVertical: 20,
    marginRight: 10,
  },
  recipeName: {
    fontSize: 28,
    marginTop: 150,
    fontWeight: "bold",
  },
  recipeDescription: {
    fontSize: 16,
    marginVertical: 16,
  },
  subContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 240,
    borderTopRightRadius: 56,
    borderTopLeftRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  secondSubContainer: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  safeAreaView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default RecipeDetailsScreen;
