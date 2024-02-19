import React from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";
import getRandomBackgroundImage from "Utils/background-images";

const PaperBackground = ({ children, style }: any) => {
  const randomBackgroundImage = getRandomBackgroundImage();
  return (
    <View style={[styles.fullScreenBackground, style]}>
      <ImageBackground
        source={{ uri: randomBackgroundImage }}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default PaperBackground;
