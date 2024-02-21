/** @format */

import * as React from "react";
import { FlatList, View } from "react-native";

import { GameCard } from "../../Components/GameCard/Game-Card";
import styles from "./styles";
import games from "./game-data";
import Navbar from "Components/Navbar/Navbar";

export function GamesScreen() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={games}
          keyExtractor={(item, _) => item.id.toString()}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <GameCard id={item.id} title={item.title} image={item.image!} />
            );
          }}
        />
      </View>
      <Navbar />
    </>
  );
}
