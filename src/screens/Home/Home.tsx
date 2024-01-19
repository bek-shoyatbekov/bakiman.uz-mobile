/** @format */

import {
  Pressable,
  Text,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { HomeScreenProps } from "./types";
import { useEffect, useRef } from "react";
import * as React from "react";
import checkUserAuthorization from "../../api/local-storage/check-user-authorization";
import { ProfileBar } from "components/Profile-bar/Profile-Bar";

export default function Home({ navigation }: HomeScreenProps) {
  const [isAuthorizedUser, setIsAuthorizedUser] = React.useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const isAuthorizationUser = await checkUserAuthorization();
        console.log(isAuthorizationUser);
        setIsAuthorizedUser(isAuthorizationUser);
      } catch (err) {
        console.error(err);
      }
    };

    checkAuthorization();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <ScrollView style={styles.container}>
          <ProfileBar username="Baki" />
          {isAuthorizedUser ? (
            <Pressable
              onPress={() => navigation.navigate("Profile")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Profile</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          )}
          <Pressable
            onPress={() => navigation.navigate("Games")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Games</Text>
          </Pressable>
        </ScrollView>
      </Animated.View>
      <Animated.View></Animated.View>
    </>
  );
}
