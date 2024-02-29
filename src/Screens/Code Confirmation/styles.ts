import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    bottom: "10%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111111",
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
    color: "#0066FF",
    textAlign: "center",
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "50%",
  },
  buttonContainer: {
    marginTop: 10,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    backgroundColor: "#0066FF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  animation: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  loading: {
    position: "absolute",
    width: 200, // Adjust width as needed
    height: 200,
    paddingHorizontal: 150,
    paddingVertical: 150,
    justifyContent: "center",
    borderRadius: 50,
    opacity: 0.6,
    zIndex: 1,
  },
});

export default styles;
