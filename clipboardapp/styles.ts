import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    gap: 48,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#323232",
    borderRadius: 10,
    padding: 10,
    color: "#efefef",
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 10,
    backgroundColor: "#8257e5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLarge: {
    height: 56,
    width: '100%',
    borderRadius: 10,
    backgroundColor: "#8257e5",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
