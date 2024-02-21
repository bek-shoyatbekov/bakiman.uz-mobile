import Background from "Components/Background";
import GameHeader from "Components/GameHeader";
import GamePairBar from "Components/GameHeader";
import GameTimer from "Components/GameHeader/GameTimer";
import React from "react";
import { Text, View } from "react-native";

export const GameScreen = ({ route }: any) => {
  const { gameId } = route.params;
  return (
    // <Background>
    <View>
      <GameHeader />
      <Text>GameRouter {gameId}</Text>
    </View>
    // </Background>
  );
};
