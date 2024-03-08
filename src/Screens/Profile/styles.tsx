import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#1E90FF",
  },

  header: {
    backgroundColor: "#1E90FF",
  },
  headerContent: {
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingVertical: "10%",
      },
      android: {
        paddingVertical: "10%",
      },
    }),
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  notification: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  profileDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignSelf: "center",
    width: "90%",
    height: "8.5%",
    borderRadius: 80,
    marginTop: "52%",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#ffffff",
  },
  detailContent: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
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
    height: "70%",
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  buttonText: {
    color: "#ffffff",
  },
});

export default styles;
