/** @format */

import { Image, Text, View } from "react-native";
import { IProfileBar } from "./types";
import styles from "./styles";

export function ProfileBar(data: IProfileBar) {
  return (
    <View style={styles.profileBar}>
      <Image
        source={require("./../../../assets/splash.png")}
        style={styles.avatar}
      />
      <Text style={styles.username}>{data.username}</Text>
    </View>
  );
}
