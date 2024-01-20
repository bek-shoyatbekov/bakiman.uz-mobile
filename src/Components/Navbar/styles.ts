import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: "#1E90FF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopStyle: "solid",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderTopColor: "#ddd",
  },

  navItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "210%",
  },

  navText: {
    color: "white",
    textAlign: "center",
  },
  icon: { color: "white", fontSize: 25 },
});

export default styles;
