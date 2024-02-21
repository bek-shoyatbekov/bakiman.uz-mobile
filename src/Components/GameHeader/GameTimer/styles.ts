import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  clock: {
    alignSelf: "center",
    height: 60,
    width: 60,
    marginTop: 9,
  },
  time: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 9,
  },
});

export default styles;
