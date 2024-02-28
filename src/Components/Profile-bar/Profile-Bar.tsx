/** @format */

import { Image, Text, SafeAreaView } from "react-native";
import { ProfileBar as ProfileBarData } from "./types";
import styles from "./styles";
import React from "react";

export function ProfileBar(data: ProfileBarData) {
  return (
    <SafeAreaView style={styles.profileBar}>
      <Image
        source={require("./../../../assets/splash.png")}
        style={styles.avatar}
      />
      <Text style={styles.username}>{data.username}</Text>
    </SafeAreaView>
  );
}
