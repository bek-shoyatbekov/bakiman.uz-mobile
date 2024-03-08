/** @format */

import React, { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  View,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Lottie from "lottie-react-native";

import handlePickAvatar from "../../Utils/image/handle-pick-avatar";
import styles from "./styles";
import { NavigationParamList } from "Components/Navbar/types";
import User from "Interfaces/User/User";
import Navbar from "Components/Navbar/Navbar";
import cacheUser from "Api/user/cache-user";
import EmailService from "Api/Auth/email/email.service";
import Storage from "Async-storage";
import { loading } from "constants/animations";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const emailService = new EmailService();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<string | any>(
    "https://drive.google.com/thumbnail?id=1TQCMNpMKwFIBkjznmUpzMfAMA8DK5azx"
  );
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleRegister() {
    try {
      if (!validate()) {
        Alert.alert("Error", errorMessage || "Validation failed");
      }
      setIsLoading(true);
      const newUser: User = {
        email,
        username,
        password,
        avatar,
      };

      await cacheUser(newUser);

      const sessionId = await emailService.checkEmail(email);

      await Storage.setItem("sessionId", sessionId.toString());

      navigation.navigate("ConfirmCode");
    } catch (err) {
      console.log(err);
    }
  }

  async function handlePickAvatarBtn() {
    const newAvatarUri = await handlePickAvatar();
    console.log("newAvatar uri", newAvatarUri);
    if (newAvatarUri) {
      setAvatar(newAvatarUri);
    }
    return;
  }

  const validate = () => {
    setErrorMessage(null); // Clear previous errors
    if (!username.trim()) {
      setErrorMessage("username is required");
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("invalid email format");
      return false;
    }

    if (!password.trim()) {
      setErrorMessage("password is required");
      return false;
    }

    if (!avatar) {
      setErrorMessage("image is required");
      return false;
    }
    return true;
  };

  return (
    <>
      <SafeAreaView
        style={[styles.container, avatar ? styles.top : styles.bottom]}
      >
        {isLoading && (
          <Lottie
            source={{
              uri: loading,
            }}
            autoPlay
            style={styles.loading}
            autoSize
            loop
          ></Lottie>
        )}
        {avatar && (
          <Image source={{ uri: avatar?.uri }} style={styles.avatar} />
        )}
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.pickImageContainerBtn}>
          <Lottie
            style={styles.uploadAnimation}
            source={{
              uri: "https://lottie.host/b82f9748-ff3c-4e73-8bb7-3aaa866a997e/9Z80h4vj9S.json",
            }}
            autoPlay
          ></Lottie>
          <Pressable style={styles.pickImageBtn} onPress={handlePickAvatarBtn}>
            {avatar ? (
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
