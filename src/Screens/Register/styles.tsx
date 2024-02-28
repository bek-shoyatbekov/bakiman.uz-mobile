import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  top: {
    top: "-7%",
  },
  bottom: {
    top: 0,
  },
  heading: {
    fontSize: 36,
    marginBottom: 30,
  },
  input: {
    width: "80%",
    padding: 16,
    marginBottom: 10,
    borderWidth: 0.2,
    borderRadius: 5,
  },
  button: {
    color: "#0066FF",
    width: "80%",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
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
    width: 100,
    height: 100,
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

  uploadText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  pickImageContainerBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  uploadAnimation: {
    width: 80,
    height: 80,
  },
  pickImageBtn: {
    backgroundColor: "#0066FF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default styles;
