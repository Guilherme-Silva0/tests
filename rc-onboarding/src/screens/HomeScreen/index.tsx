import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import { getItem, removeItem } from "../../ultil/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "../../navigation/AppNavigation";

export function HomeScreen() {
  const navigation = useNavigation<NavigationTypes>();
  const handleReset = () => {
    removeItem("onboarded");
    navigation.navigate("Onboarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require("../../assets/congratulations.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text>Resetar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
