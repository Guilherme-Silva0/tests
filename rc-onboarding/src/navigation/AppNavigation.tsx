import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { OnBoardingScreen } from "../screens/OnBoardingScreen";
import { getItem } from "../ultil/asyncStorage";

type NavigationProps = {
  Onboarding: undefined;
  Home: undefined;
};

export type NavigationTypes = NativeStackNavigationProp<NavigationProps>;

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  const [showOnBoarding, setShowOnBoarding] = useState<null | boolean >(null);

  const checkIfAlreadyOnBoarded = async () => {
    let onboarded = await getItem("onboarded")
    console.log(onboarded)
    if (onboarded == "1") {
      setShowOnBoarding(false)
    } else {
      setShowOnBoarding(true)
    }
  }
  
  useEffect(() => {
    checkIfAlreadyOnBoarded()
  }, [])

  if(showOnBoarding === null) {
    return null
  }

  if(showOnBoarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Onboarding"}
          screenOptions={{ animation: "slide_from_right" }}
        >
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnBoardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{ animation: "slide_from_right" }}
      >
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
