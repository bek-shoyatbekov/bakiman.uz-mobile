/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Hello from "./src/screens/Home/Home";

export default function App() {
  return (
    <>
      <View>
        <Hello />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
