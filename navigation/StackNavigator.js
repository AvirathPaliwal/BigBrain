import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import CalculatorScreen from "../Screen/CalculatorScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Home" component = {TabNavigator} />
            <Stack.Screen name = "CalculatorScreen" component = {CalculatorScreen} />
        </Stack.Navigator>
    )

}

export default StackNavigator;