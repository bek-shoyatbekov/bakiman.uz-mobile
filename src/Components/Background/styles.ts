import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
    position: "absolute", // Or width: '100%' if preferred
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default styles;
