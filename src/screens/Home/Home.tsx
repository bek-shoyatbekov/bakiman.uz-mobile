/** @format */

import { Pressable, Text, SafeAreaView, TextInput, View } from "react-native";
import styles from "./styles";
import * as React from "react";
import { ProfileBar } from "Components/Profile-bar/Profile-Bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "Components/Navbar/types";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ProfileBar username="Baki" />
      <View style={styles.homeContainer}>
        <TextInput placeholder="Enter Game id" style={styles.input}></TextInput>
        <Pressable
          onPress={() =>
            navigation.navigate("Games", {
              gameId: "33d",
              userId: "33k",
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Games</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
