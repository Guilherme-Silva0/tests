import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottieContainer: {
    width: width * 0.9,
    height: width,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "500",
    marginBottom: 20,
  },
  resetButton: {
    padding: 10,
    backgroundColor: "#34d399",
    borderRadius: 10,
  }
})