import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "#f2f2f2",
    bottom: 0,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  emojiButton: {
    marginLeft: 8,
  },
  emojiMenu: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
