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
    top: "-30%",
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
  input: {
    width: "80%",
    textAlign: "center",
    padding: 13,
    backgroundColor: "#ffff",
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
