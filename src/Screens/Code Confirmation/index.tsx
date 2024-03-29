import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  SafeAreaView,
} from "react-native";
import Lottie from "lottie-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import EmailService from "Api/Auth/email/email.service";
import styles from "./styles";
import Storage from "Async-storage";
import { loading } from "constants/animations";
import { NavigationParamList } from "Components/Navbar/types";
import { UserEvents } from "Events/User";
import User from "Interfaces/User/User";
import { createSignupForm } from "Utils/Form/create-signup.form";
import UserService from "Api/Auth/user/user.service";

const ConfirmCodeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // Start with 1 minute
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const emailService = new EmailService();
  const userService = new UserService();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      if (timeLeft == 0 || timeLeft <= 0) {
        setIsResendDisabled(false);
        setTimeLeft(0);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode.replace(/[^0-9]/g, "")); // Allow only numbers
  };

  const handleConfirmCode = async () => {
    setIsLoading(true);
    setIsSubmitDisabled(true);

    try {
      const sessionId = await Storage.getItem("sessionId");
      const userStr = await Storage.getItem("user");
      const user: User = JSON.parse(userStr!);

      const result = await emailService.confirmEmail(
        sessionId!,
        parseInt(code)
      );

      if (!result || !user) {
        Alert.alert("Error", "Failed to confirm code");
        navigation.goBack();
      }

      console.log("User ", user);

      const signupForm = await createSignupForm(user);

      console.log("Signup form", signupForm);

      const signupResult = await userService.signup(signupForm!);

      if (!signupResult) {
        navigation.goBack();
      }

      console.log("Signup result", signupResult);

      Alert.alert("Success", "Code confirmed successfully");
      UserEvents.emit("login", true);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error while confirming code", JSON.stringify(error));
      navigation.goBack();
    }
  };

  const handleResendCode = () => {
    // Implement your code resend logic here
    setTimeLeft(60);
    setIsResendDisabled(true);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <Lottie
        source={{
          uri: "https://lottie.host/d9efa7ed-3035-4604-8c55-4cc918c706e3/dhexOnyEZK.json",
        }}
        autoPlay
        style={styles.animation}
      ></Lottie>
      <Text style={styles.title}>We sent confirmation code to your email</Text>

      <TextInput
        style={styles.codeInput}
        value={code}
        onChangeText={handleCodeChange}
        maxLength={5}
        placeholder="Enter 5-digit code"
      />
      <Pressable onPress={handleResendCode} disabled={isResendDisabled}>
        <Text style={styles.text}>Resend Code {timeLeft}</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={handleConfirmCode}
          disabled={code.length !== 5 || isSubmitDisabled}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmCodeScreen;
