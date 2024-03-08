import { Pressable, Text, View} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";
import { NavigationParamList } from "./types";
import checkUserAuthorization from "Api/user/check-user-authorization";
import User from "Interfaces/User/User";
import { UserEvents } from "Events/User";

export default function Navbar() {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [user, setUser] = useState<User | boolean>();

  UserEvents.on("logout", () => {
    setUser(undefined);
  });

  UserEvents.on("login", () => {
    setUser(true);
  });

  useState(() => {
    const getUser = async () => {
      const userData = await checkUserAuthorization();
      if (userData) {
        setUser(userData as User);
      }
    };
    getUser();
  });

  async function handleNavigationChange(location: string) {
    if (!user) {
      const result = await checkUserAuthorization();
      if (result) {
        setUser(result as User);
      }
    }
    navigation.navigate(location, {
      avatar: (user as User)?.avatar as string,
      username: (user as User)?.username,
    });
  }

  return (
    <View style={styles.navbar}>
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
    </View>
  );
}
