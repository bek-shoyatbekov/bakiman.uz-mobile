/** @format */

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/Home/Home";
import { ProfileScreen } from "./src/screens/Profile/Profile";
import { GamesScreen } from "./src/screens/Games/Games";
import { LeaderboardScreen } from "./src/screens/Leaderboard/Leaderboard";
import LoginScreen from "./src/screens/Login/Login";
import Navbar from "components/Navbar/Navbar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
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
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{ title: "Leaderboard" }}
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
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{ title: "Navbar" }}
        ></Stack.Screen>
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
