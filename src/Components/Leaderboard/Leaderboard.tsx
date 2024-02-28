/** @format */

import { ScrollView, Text } from "react-native";
import React from "react";
import User from "Interfaces/User/User";

export function LeaderboardScreen(users: User[]) {
  return (
    <ScrollView>
      <Text style={{ textAlign: "center" }}>Users....</Text>
    </ScrollView>
  );
}
