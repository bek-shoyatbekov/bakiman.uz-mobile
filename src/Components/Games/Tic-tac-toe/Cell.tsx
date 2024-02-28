import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  value: string | null;
  onPress: () => void;
};

const Cell: React.FC<Props> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Cell;
