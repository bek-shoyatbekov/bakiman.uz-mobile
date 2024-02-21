/** @format */

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/Screens/Home/Home";
import { ProfileScreen } from "./src/Screens/Profile/Profile";
import { GamesScreen } from "./src/Screens/Games/GamesScreen";
import LoginScreen from "./src/Screens/Login/Login";

import { GameScreen } from "Screens/Games/Game";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{ title: "Games" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: "Game" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Your profile" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
