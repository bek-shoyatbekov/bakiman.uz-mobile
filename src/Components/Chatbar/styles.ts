/** @format */

import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    bottom: "10%",
    ...Platform.select({
      ios: {
        paddingHorizontal: "3%",
      },
    }),
    backgroundColor: "#f2f2f2",
  },
  input: {
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
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
  sendBtn: {
    backgroundColor: "#1E90FF",
    padding: 11.8,
    color: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  },
  sendBtnText: {
    color: "white",
  },
  exitBtn: {
    backgroundColor: "#1E90FF",
    padding: 11.8,
    color: "white",
    borderRadius: 4,
    fontSize: 16,
  },
  exitBtnText: {
    color: "white",
  },
});

export default styles;
