import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  addClipboardListener,
  getImageAsync,
  getStringAsync,
  removeClipboardListener,
  setStringAsync,
} from "expo-clipboard";

import { styles } from "./styles";

export default function App() {
  const [text, setText] = useState("");
  const [img, setImg] = useState<string | undefined>();

  async function handleCopyToClipboard() {
    await setStringAsync(text);
  }

  async function handleGetToClipboard() {
    const response = await getStringAsync();
    Alert.alert(response);
  }

  async function handleImageGetToClipboard() {
    const response = await getImageAsync({ format: "png" });
    setImg(response?.data);
  }

  useEffect(() => {
    const subscription = addClipboardListener(() => {
      Alert.alert("Copiado!");
    });

    return () => removeClipboardListener(subscription);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
      <View style={{width: '100%', gap: 8}}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleCopyToClipboard}
          >
            <MaterialIcons name="content-copy" size={22} color="#efefef" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleGetToClipboard}
          >
            <MaterialIcons name="content-paste" size={22} color="#efefef" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonLarge}
          onPress={handleImageGetToClipboard}
        >
          <MaterialIcons name="image" size={22} color="#efefef" />
        </TouchableOpacity>
      </View>

      <StatusBar style="inverted" />
    </View>
  );
}
