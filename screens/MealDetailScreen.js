import { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import IconButton from "../components/IconButton";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
const MealDetailScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const headerButtonPressHandler = () => {
        console.log("pressed");
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/> }
        })
    }, [navigation, headerButtonPressHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View>
                <MealDetails
                    textStyle={styles.detailText}
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%"
    },
})