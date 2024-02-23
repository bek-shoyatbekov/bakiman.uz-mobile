/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileBar: {
    position: "absolute",
    top: 0,
    border: "3px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 200,
    height: 200,
  },
  username: {
    display: "flex",
    fontSize: 35,
  },
});

export default styles;
