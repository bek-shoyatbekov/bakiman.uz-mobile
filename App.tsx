/** @format */

import * as React from "react";
import HomeScreen from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "./src/screens/Profile/Start";
import { GamesScreen } from "./src/screens/Games/Settings";
import { LeaderboardScreen } from "./src/screens/Leaderboard/Leaderboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}></Stack.Screen>
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{ title: "Games" }}></Stack.Screen>
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{ title: "Leaderboard" }}></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Your profile" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
