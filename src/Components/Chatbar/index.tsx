import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
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

  const toggleEmojiMenu = () => {
    setIsEmojiMenuOpen(!isEmojiMenuOpen);
  };

  const renderEmojiItem = ({ item }: { item: Emoji }) => (
    <TouchableOpacity onPress={() => handleEmojiPress(item)}>
      <Text style={{ fontSize: 24, marginHorizontal: 10 }}>{item.icon}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        placeholder="Type your message..."
        multiline={false}
      />
      <Button title="Send" onPress={handleSend} />
      <TouchableOpacity style={styles.emojiButton} onPress={toggleEmojiMenu}>
        <Feather name="smile" size={24} color="black" />
      </TouchableOpacity>
      {isEmojiMenuOpen && (
        <FlatList
          ref={emojiMenuRef}
          data={emojis}
          renderItem={renderEmojiItem}
          keyExtractor={(item) => item.name}
          horizontal={true}
          style={styles.emojiMenu}
        />
      )}
    </View>
  );
};

export default ChatBar;
