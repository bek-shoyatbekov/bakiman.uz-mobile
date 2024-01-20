import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    marginBottom: 30,
  },
  input: {
    width: "80%",
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    color: "black",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: "2%",
  },
  registerButton: {
    backgroundColor: "#0066FF",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: "2%",
    width: "90%",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },
  pickText: {
    fontSize: 18,
    color: "black",
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: "10%",
  },
  logo: {
    width: 180,
    height: 150,
    borderRadius: 5,
    marginBottom: "5%",
  },
  avatarPlaceholder: {
    width: 128,
    height: 128,
    backgroundColor: "#E1E1E1",
    borderRadius: 64,
  },
});

export default styles;
