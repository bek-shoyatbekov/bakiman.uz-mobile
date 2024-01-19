import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Stats
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});

export default styles;
