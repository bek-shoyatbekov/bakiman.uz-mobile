/** @format */

import React, { useEffect, useRef } from "react";
import { SafeAreaView, Text } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

const GameTimer = () => {
  const lottieRef = useRef<LottieView | null>(null);

  const [time, setTime] = React.useState(10);
  useEffect(() => {
    if (time === 0) {
      setTime(10);
    }

    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        ref={lottieRef}
        speed={1}
        style={styles.clock}
        source={{
          uri: "https://lottie.host/c9696f90-45e0-4a20-908f-806ff3e1bff8/vRmmMKW3eo.json",
        }}
        renderMode="SOFTWARE"></LottieView>
      <Text style={styles.time}>{time}</Text>
    </SafeAreaView>
  );
};

export default GameTimer;
