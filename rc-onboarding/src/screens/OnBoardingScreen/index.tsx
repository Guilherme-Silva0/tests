import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "../../navigation/AppNavigation";
import { setItem } from "../../ultil/asyncStorage";

export function OnBoardingScreen() {
  const navigation = useNavigation<NavigationTypes>();

  const handleDone = async () => {
    await setItem("onboarded", "1");
    navigation.navigate("Home");
  };

  const DoneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 20 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../../assets/welcome.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Seja bem vindo!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../../assets/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Este é um teste!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../../assets/meditate.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Obrigado por testar!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}
