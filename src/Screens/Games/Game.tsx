/** @format */

import ChatBar from "Components/Chatbar";
import GameHeader from "Components/GameHeader";
import React from "react";
import TicTacToe from "Components/Games/Tic-tac-toe/Board";

export const GameScreen = ({ route }: any) => {
  const { gameId } = route.params;
  return (
    <>
      <GameHeader />
      <TicTacToe />
      <ChatBar />
    </>
  );
};
