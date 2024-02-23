import { Pressable, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";
import { NavigationParamList } from "./types";
import checkUserAuthorization from "Api/user/check-user-authorization";
import IUser from "Interfaces/User/User";
import { UserEvents } from "Events/User";

export default function Navbar() {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [user, setUser] = useState<IUser>();

  UserEvents.on("logout", () => {
    setUser(undefined);
  });

  UserEvents.on("LOGIN_SUCCESSFUL", (user: IUser) => {
    setUser(user);
  });

  useState(() => {
    const getUser = async () => {
      const userData = await checkUserAuthorization();
      if (userData) {
        setUser(userData as IUser);
      }
    };
    getUser();
  });

  async function handleNavigationChange(location: string) {
    if (!user) {
      const result = await checkUserAuthorization();
      if (result) {
        setUser(result as IUser);
      }
    }
    navigation.navigate(location, {
      avatar: user?.avatar,
      username: user?.username,
    });
  }

  return (
    <SafeAreaView style={styles.navbar}>
      <Pressable
        style={styles.navItem}
        onPress={async () => await handleNavigationChange("Home")}
      >
        <FontAwesome name="home" style={styles.icon} />
        <Text style={styles.navText}>Home</Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={async () => await handleNavigationChange("Games")}
      >
        <FontAwesome name="gamepad" style={styles.icon} />
        <Text style={styles.navText}>Games</Text>
      </Pressable>

      {user ? (
        <Pressable
          style={styles.navItem}
          onPress={async () => await handleNavigationChange("Profile")}
        >
          <FontAwesome name="user" style={styles.icon} />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.navItem}
          onPress={async () => await handleNavigationChange("Login")}
        >
          <FontAwesome name="sign-in" style={styles.icon} />
          <Text style={styles.navText}>Login</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}
