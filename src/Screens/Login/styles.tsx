import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: "15%",
  },
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderWidth: 0.2,
    borderRadius: 5,
  },
  button: {
    color: "#0066FF",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: "#0066FF",
    padding: 16,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    width: "80%",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },

  animation: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  forgotPassword: {
    color: "#0066FF",
    marginTop: 10,
  },
  registerText: {
    color: "#0066FF",
    marginBottom: 10,
    fontSize: 18,
  },
  registerBtn:{
    marginTop: 10,
  }
});

export default styles;
