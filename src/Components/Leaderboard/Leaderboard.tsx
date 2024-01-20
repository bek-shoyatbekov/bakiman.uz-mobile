/** @format */

import { ScrollView, Text } from "react-native";
import React from "react";
import IUser from "Interfaces/User/User";

export function LeaderboardScreen(users: IUser[]) {
  return (
    <ScrollView>
      <Text style={{ textAlign: "center" }}>Users....</Text>
    </ScrollView>
  );
}
