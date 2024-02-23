/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  homeContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  button: {
    backgroundColor: "#1E90FF",
    paddingBottom: "4%",
    textAlign: "center",
    paddingTop: "2%",
    marginBottom: "2%",
    borderRadius: 70,
    width: "80%",
  },

  buttonText: {
    color: "#dfdfdf",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },

  input: {
    width: "80%",
    textAlign: "center",
    padding: "2%",
    backgroundColor: "#ffff",
    marginBottom: 12,
    borderRadius: 70,
  },
});

export default styles;
