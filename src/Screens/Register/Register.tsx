/** @format */

import React, { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  Alert,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import pickImage from "../../Utils/image/pick-image";
import styles from "./styles";
import login from "Api/user/login";
import { NavigationParamList } from "Components/Navbar/types";
import User from "Interfaces/User/User";
import { UserEvents } from "Events/User";
import Navbar from "Components/Navbar/Navbar";
import Lottie from "lottie-react-native";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(
    "https://drive.google.com/thumbnail?id=1TQCMNpMKwFIBkjznmUpzMfAMA8DK5azx"
  );

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

  async function handleRegister() {
    try {
      const result = await login({
        email,
        username,
        avatar: image,
      } as User);
      navigation.navigate("ConfirmCode");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <SafeAreaView
        style={[styles.container, image ? styles.top : styles.bottom]}
      >
        {image && <Image source={{ uri: image }} style={styles.avatar} />}
        <TextInput
          style={styles.input}
          placeholder="username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          value={username}
          onChangeText={setUsername}
        />

        <View style={styles.pickImageContainerBtn}>
          <Lottie
            style={styles.uploadAnimation}
            source={{
              uri: "https://lottie.host/b82f9748-ff3c-4e73-8bb7-3aaa866a997e/9Z80h4vj9S.json",
            }}
            autoPlay
          ></Lottie>
          <Pressable style={styles.pickImageBtn} onPress={handleImagePick}>
            {image ? (
              <Text style={styles.uploadText}>Change Avatar</Text>
            ) : (
              <Text style={styles.uploadText}>Choose Avatar</Text>
            )}
          </Pressable>
        </View>
        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </SafeAreaView>
      <Navbar />
    </>
  );
};

export default RegisterScreen;
