/** @format */

import GameHeader from "Components/GameHeader";
import React from "react";
import { Text, View } from "react-native";

export const GameScreen = ({ route }: any) => {
  const { gameId } = route.params;
  return (
    <>
      <GameHeader />
    </>
  );
};
