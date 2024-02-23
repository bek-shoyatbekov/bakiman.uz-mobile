/** @format */

import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "Components/Navbar/types";

interface Emoji {
  name: string;
  icon: string;
}

const emojis: Emoji[] = [
  // Add your custom emoji data here
  { name: "Smile", icon: "smile" },
  { name: "Laugh", icon: "laugh" },
  { name: "Heart", icon: "heart" },
  { name: "Thumbs Up", icon: "thumbs-up" },
  { name: "Fire", icon: "fire" },
];

const ChatBar: React.FC = ({ onSend }: any) => {
  const [message, setMessage] = useState("");
  const [isEmojiMenuOpen, setIsEmojiMenuOpen] = useState(false);
  const emojiMenuRef = useRef<FlatList>(null);

  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const handleSend = () => {
    if (!message) {
      return;
    }
    onSend(message);
    setMessage("");
  };

  const handleEmojiPress = (emoji: Emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.icon);
    setIsEmojiMenuOpen(false);
  };

  const handleExitBtn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitBtn} onPress={handleExitBtn}>
        <Text style={styles.exitBtnText}>Exit</Text>
      </TouchableOpacity>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        placeholder="Type your message..."
        multiline={false}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
        <Text style={styles.sendBtnText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBar;
