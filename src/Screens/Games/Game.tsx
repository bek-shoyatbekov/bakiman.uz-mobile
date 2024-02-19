import PaperBackground from "Components/PaperBackground";
import React from "react";
import { Text, View } from "react-native";

export const GameScreen = ({ route }: any) => {
  const { gameId } = route.params;
  return (
    <PaperBackground>
      <View>
        <Text>GameRouter {gameId}</Text>
      </View>
    </PaperBackground>
  );
};
