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
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Lottie from "lottie-react-native";

import pickImage from "../../Utils/image/handle-pick-avatar";
import styles from "./styles";
import login from "Api/user/cache-user";
import { NavigationParamList } from "Components/Navbar/types";
import User from "Interfaces/User/User";
import { UserEvents } from "Events/User";
import Navbar from "Components/Navbar/Navbar";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  async function handleLogin() {
    try {
      const result = await login({
        email,
        username,
      } as User);

      Alert.alert("Logged in", "You logged in successfully");
      UserEvents.emit("LOGIN_SUCCESSFUL", result);
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  }

  function handleForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  function handleRegister() {
    navigation.navigate("Register");
  }

  return (
    <>
      <View style={styles.container}>
        <Lottie
          style={styles.animation}
          source={{
            uri: "https://lottie.host/5b803e4b-63c1-4474-979a-3bef394d773e/lAfammGItq.json",
          }}
          autoPlay={true}
        ></Lottie>
        <TextInput
          style={styles.input}
          placeholder="email or username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={username}
          onChangeText={setUsername}
        />
        <Pressable>
          <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>
        </Pressable>
        <Pressable style={styles.registerButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={styles.registerBtn}>
          <Text>
            Don't have an account?{" "}
            <Text style={styles.registerText} onPress={handleRegister}>
              Register
            </Text>
          </Text>
        </Pressable>
      </View>
      <Navbar />
    </>
  );
};

export default LoginScreen;
