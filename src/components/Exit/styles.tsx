/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
    width: "60%",
    height: "20%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    backgroundColor: "none",
    marginVertical: 10,
  },
  buttonText: {
    color: "#4e4848",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
