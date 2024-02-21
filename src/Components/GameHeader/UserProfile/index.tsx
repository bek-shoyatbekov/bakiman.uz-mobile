import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const UserProfile = ({ user }: any) => {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: user.avatar }} style={styles.image} />
      <Text style={styles.username}>{user.username}</Text>
    </View>
  );
};

export default UserProfile;
