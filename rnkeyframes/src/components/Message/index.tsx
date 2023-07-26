import { Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { Keyframe } from "react-native-reanimated";

export function Message() {
  const enteringKeyFrame = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        {
          translateY: -104,
        },
      ],
    },
    65: {
      opacity: 0.4,
    },
    100: {
      opacity: 1,
      transform: [
        {
          translateY: 0,
        },
      ],
    },
  });

  const exitingKeyFrame = new Keyframe({
    from: {
      opacity: 1,
      transform: [
        {
          translateY: 0,
        },
      ],
    },
    to: {
      opacity: 0,
      transform: [
        {
          translateY: -104,
        },
      ],
    },
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyFrame.duration(200)}
      exiting={exitingKeyFrame.duration(200)}
      
    >
      <MaterialIcons name="notifications" size={18} color="#efefef" />
      <Text style={styles.title}>Menssagem de exemplo</Text>
    </Animated.View>
  );
}
