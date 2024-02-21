/** @format */

import { Pressable, Text, SafeAreaView, TextInput, View } from "react-native";
import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { ProfileBar } from "Components/Profile-bar/Profile-Bar";
import { NavigationParamList } from "Components/Navbar/types";
import styles from "./styles";
import Navbar from "Components/Navbar/Navbar";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [gameId, setGameId] = React.useState("");
  const [userId, setUserId] = React.useState("");

  const handleGameIdChange = (gameId: string) => {
    setGameId(gameId);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ProfileBar username="Baki" />
        <View style={styles.homeContainer}>
          <TextInput
            placeholder="Enter Game id"
            style={styles.input}
            onChangeText={handleGameIdChange}
            value={gameId}
          ></TextInput>
          <Pressable
            onPress={() =>
              navigation.navigate("Game", {
                gameId,
                userId,
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Play</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <Navbar />
    </>
  );
}
