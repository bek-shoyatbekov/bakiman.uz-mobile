import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import styles from "./styles";

const ConfirmCodeScreen = () => {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // Start with 1 minute
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      if (timeLeft === 0) {
        setIsResendDisabled(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode.replace(/[^0-9]/g, "")); // Allow only numbers
  };

  const handleConfirmCode = () => {
    if (code.length === 5) {
      Alert.alert("Code confirmed", `Code: ${code}`);
    }
  };

  const handleResendCode = () => {
    // Implement your code resend logic here
    setTimeLeft(60);
    setIsResendDisabled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Code</Text>
      <TextInput
        style={styles.codeInput}
        value={code}
        onChangeText={handleCodeChange}
        maxLength={5}
        keyboardType="numeric"
        placeholder="Enter 5-digit code"
      />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={handleConfirmCode}
          disabled={code.length !== 5}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
        <Pressable
          onPress={handleResendCode}
          disabled={isResendDisabled}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Resend Code</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmCodeScreen;
