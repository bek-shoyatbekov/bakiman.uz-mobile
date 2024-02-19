/** @format */

import React, { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import pickImage from "../../Utils/image/pick-image";
import styles from "./styles";
import login from "Api/local-storage/login";
import { NavigationParamList } from "Components/Navbar/types";
import IUser from "Interfaces/User/User";
import { UserEvents } from "Events/User";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  async function handleImagePick() {
    try {
      const result = await pickImage();
      if (result) {
        setImage(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogin() {
    try {
      const result = await login({
        email,
        username,
        avatar: image,
      } as IUser);

      Alert.alert("Logged in", "You logged in successfully");
      UserEvents.emit("LOGIN_SUCCESSFUL", result);
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.avatar} />}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <Pressable style={styles.button} onPress={handleImagePick}>
        {image ? (
          <>
            <Icon name="upload" />
            <Text>Change Icon</Text>
          </>
        ) : (
          <>
            <Icon name="upload" />
            <Text>Upload Icon</Text>
          </>
        )}
      </Pressable>
      <Pressable style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
