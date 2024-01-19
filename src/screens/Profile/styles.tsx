import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E90FF",
  },

  header: {
    backgroundColor: "#1E90FF",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  profileDetail: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    alignSelf: "center",
    marginTop: 200,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#ffffff",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#1E90FF",
  },
  textInput: {
    width: 210,
    height: "9%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#1E90FF",
  },
  description: {
    fontSize: 20,
    color: "#1E90FF",
    marginTop: 10,
    textAlign: "center",
  },
  body: {
    backgroundColor: "#ffffff",
    height: "90%",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  buttonText: {
    color: "#ffffff",
  },
});

export default styles;
