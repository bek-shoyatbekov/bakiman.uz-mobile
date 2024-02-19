import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
              <Image
                style={styles.icon}
                source={require("../../../assets/like-icon.png")}
              />
              <Text style={styles.socialBarlabel}>78</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Image
                style={styles.icon}
                source={require("../../../assets/play-games-icon.png")}
              />
              <Text style={styles.socialBarlabel}>25</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/share.png",
                }}
              />
              <Text style={styles.socialBarlabel}>13</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
