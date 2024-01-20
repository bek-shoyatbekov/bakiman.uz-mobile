/** @format */

import * as React from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IUser from "Interfaces/User/User";
import styles from "./styles";

export function ProfileScreen({ navigation }: any) {
  const [user, setUser] = React.useState<IUser>();
  const [changed, setChanged] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState("");

  React.useState(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUser = JSON.parse(userData);

        setUsername(parsedUser.username);
        setUser(parsedUser);
      }
    };
    getUser();
  });

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable>
            <Image
              style={styles.avatar}
              source={{
                uri: user?.avatar,
              }}
            />
          </Pressable>
          <TextInput style={styles.name}>{user?.username}</TextInput>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Scores</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Victories</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Lose</Text>
          <Text style={styles.count}>200</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {changed ? "Save" : "No change"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
