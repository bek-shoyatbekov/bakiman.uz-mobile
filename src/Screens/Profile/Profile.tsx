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

import IUser from "Interfaces/User/User";
import styles from "./styles";
import Storage from "Async-storage";
import { UserEvents } from "Events/User";
import Navbar from "Components/Navbar/Navbar";

export function ProfileScreen({ navigation }: any) {
  const [user, setUser] = React.useState<IUser>();
  const [changed, setChanged] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState("");

  async function saveChanges() {
    if (changed) {
      console.log("Saving changes", username, user?.avatar);
      await Storage.setItem(
        "user",
        JSON.stringify({ username, avatar: user?.avatar } as IUser)
      );
      setChanged(false);
    }
  }

  React.useState(() => {
    const getUser = async () => {
      const userData = await Storage.getItem("user");
      if (userData) {
        const parsedUser = JSON.parse(userData);

        setUsername(parsedUser.username);
        setUser(parsedUser);
      }
    };
    getUser();
  });

  const handleLogout = async () => {
    await Storage.removeItem("user");
    UserEvents.emit("logout", { userId: user?.id });
    navigation.navigate("Home");
  };
  return (
    <>
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
            <TextInput
              style={styles.name}
              onChangeText={(username) => {
                setChanged(true);
                setUsername(username);
              }}
            >
              {user?.username}
            </TextInput>
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
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={saveChanges}
            >
              <Text style={styles.buttonText}>
                {changed ? "Save" : "No change"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Navbar />
    </>
  );
}
