import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import Cell from "./Cell";
import styles from "./styles";

type Player = "X" | "O" | null;

const initialBoard: Player[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  const handleCellPress = (row: number, col: number) => {
    if (board[row][col] || checkWinningCondition(board)) return;

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinningCondition = (board: Player[][]): boolean => {
    // Implement winning condition logic here
    // Return true if there's a winner, false otherwise
    return false;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onPress={() => handleCellPress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
      {checkWinningCondition(board) && (
        <View>
          <Text>{`Player ${currentPlayer === "X" ? "O" : "X"} wins!`}</Text>
          <Button title="Reset Game" onPress={resetGame} />
        </View>
      )}
    </View>
  );
};

export default TicTacToe;
