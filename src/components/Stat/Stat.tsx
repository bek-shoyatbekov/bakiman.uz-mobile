import { View, Text } from "react-native";
import React from "react";
import { StatProp } from "./types";
import styles from "./styles";

export default function Stat(data: StatProp) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.statValue}>{data.value}</Text>
        <Text style={styles.statLabel}>{data.label}</Text>
      </View>
    </View>
  );
}
