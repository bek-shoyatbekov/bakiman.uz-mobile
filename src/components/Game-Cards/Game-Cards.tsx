import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import data from "./fake-data";

export const GameCards = () => {
  const [games, setGames] = useState(data);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={games}
        keyExtractor={(item, index) => item.id as unknown as string}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>

              <Image style={styles.cardImage} source={{ uri: item.image }} />

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
        }}
      />
    </View>
  );
};
