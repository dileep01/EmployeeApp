import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
  container: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 3
  },

  label: {
    fontSize: 16,
    color: "white"
  },

  //// AnimatedButton styles
  animatedButton: {
    width: 200,
    height: 50,
    backgroundColor: "rgba(255,82,82,1)",
    borderRadius: 25
  },
  defaultLoadingTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  defaultLoadingText: {
    color: "#FFF"
  }
});

export default ButtonStyles;
