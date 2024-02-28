import React from "react";
import { View } from "react-native";
import UserProfile from "./UserProfile";
import IUser from "Interfaces/User/User";
import styles from "./styles";
import GameTimer from "./GameTimer";

const GameHeader = () => {
  const user1: IUser = {
    id: "3",
    username: "John",
    avatar:
      "https://drive.google.com/thumbnail?id=1GmLzVjyesaEnZotX4IbXrZX3ZuUt-SeA",
  };

  const user2: IUser = {
    id: "4",
    username: "Jane",
    avatar:
      "https://drive.google.com/thumbnail?id=1f1-J5OBPCpCeiCUz7yMooWehDhBi5vR0",
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftProfile}>
          <UserProfile user={user1} />
        </View>
        <GameTimer />
        <View style={styles.rightProfile}>
          <UserProfile user={user2} />
        </View>
      </View>
    </>
  );
};

export default GameHeader;
