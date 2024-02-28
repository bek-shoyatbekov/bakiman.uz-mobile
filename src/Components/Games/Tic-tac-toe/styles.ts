import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    marginTop: "6%",
  },
  row: {
    flexDirection: "row",
  },

  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E90FF",
    textAlign: "center",
  },
});

export default styles;
