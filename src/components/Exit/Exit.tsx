/** @format */

import React, { useState } from "react";
import { BackHandler, Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";

export default function Exit({ navigation }: any) {
  const [isVisible, setIsVisible] = useState(false);

  const showConfirm = () => {
    setIsVisible(true);
  };

  const closeConfirm = () => {
    setIsVisible(false);
  };

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <View>
      <Pressable onPress={showConfirm} style={styles.button}>
        <Text style={styles.buttonText}>Exit</Text>
      </Pressable>

      <Modal visible={isVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Are you sure?</Text>

            <Pressable style={styles.button} onPress={handleExit}>
              <Text style={styles.buttonText}>Yes</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={closeConfirm}>
              <Text style={styles.buttonText}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
