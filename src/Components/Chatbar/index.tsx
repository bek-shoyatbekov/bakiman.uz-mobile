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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitBtn}>
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
