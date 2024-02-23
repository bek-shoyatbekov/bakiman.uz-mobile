import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { IGame } from "Interfaces/GameCard/Game";

export const GameCard = (game: IGame) => {
  const navigation = useNavigation<any>();
  function handlePlayBtn() {
    navigation.navigate("Game", {
      gameId: game.id,
    });
  }
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.title}>{game.title}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handlePlayBtn}>
        <Image style={styles.cardImage} source={{ uri: game.image }} />
      </TouchableOpacity>
      <View style={styles.cardFooter}>
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <FontAwesome name="heart" color={"#1E90FF"} size={20} />
              <Text style={styles.socialBarlabel}>78</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <FontAwesome name="play-circle" color={"#1E90FF"} size={23} />
              <Text style={styles.socialBarlabel}>25</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <FontAwesome name="share" color={"#1E90FF"} size={20} />
              <Text style={styles.socialBarlabel}>13</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
