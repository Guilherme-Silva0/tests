import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { styles } from "./styles";

export function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 20 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView source={require("../../assets/welcome.json")} autoPlay loop />
              </View>
            ),
            title: "Seja bem vindo!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Eita</Text>
              </View>
            ),
            title: "Este é um teste!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Eita</Text>
              </View>
            ),
            title: "Obrigado por testar!",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ]}
      />
      <StatusBar style="auto"/>
    </View>
  );
}
