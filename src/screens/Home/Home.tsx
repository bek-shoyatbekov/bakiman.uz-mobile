/** @format */

import { Pressable, Text, View, Animated, Easing } from "react-native";
import styles from "./styles";
import { HomeScreenProps } from "./types";
import { useEffect, useRef } from "react";
import Exit from "../../components/Exit/Exit";
import { ProfileBar } from "../../components/Profile-bar/Profile-Bar";

export default function Home({ navigation }: HomeScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <View style={styles.container}>
        <ProfileBar username="Bek" />
        <Pressable
          onPress={() => navigation.navigate("Profile")}
          style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Games")}
          style={styles.button}>
          <Text style={styles.buttonText}>Games</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Leaderboard")}
          style={styles.button}>
          <Text style={styles.buttonText}>Leaderboard</Text>
        </Pressable>
      </View>
      <Exit />
    </Animated.View>
  );
}
