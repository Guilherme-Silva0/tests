import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window")

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottieContainer: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
  }
})
