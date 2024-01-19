/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "-20%",
    overflow: "hidden",
    bottom: "6%",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingBottom: "4%",
    textAlign: "center",
    paddingTop: "4%",
    marginBottom: "2%",
    borderRadius: 50,
    width: "90%",
    marginLeft: "5%",
  },
  buttonText: {
    color: "#dfdfdf",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },

  navbar: {
    position: "absolute", // Changed from 'relative'
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  navItem: {
    flex: 1,
    display: "flex",
  },

  navText: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;
