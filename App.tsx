/** @format */

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/Screens/Home/Home";
import { ProfileScreen } from "./src/Screens/Profile/Profile";
import { GamesScreen } from "./src/Screens/Games/Games";
import LoginScreen from "./src/Screens/Login/Login";

import { GameScreen } from "Screens/Games/Game";
import RegisterScreen from "Screens/Register/Register";
import ConfirmCodeScreen from "Screens/Code Confirmation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Games" component={GamesScreen}></Stack.Screen>
        <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen
          name="ConfirmCode"
          component={ConfirmCodeScreen}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
