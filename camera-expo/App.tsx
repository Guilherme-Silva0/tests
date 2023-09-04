import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { AutoFocus, Camera, CameraType, FlashMode } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [enableFlash, setEnableFlash] = useState(FlashMode.off);
  const [suportedRatios, setSupportedRatios] = useState<string[]>(["4:3"]);
  const [selectedRatio, setSelectedRatio] = useState(
    suportedRatios[0] || "4:3"
  );
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [zoomValue, setZoomValue] = useState(0);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const getSuportedRatios = async () => {
    try {
      if (cameraRef) {
        const ratios = await cameraRef.getSupportedRatiosAsync();
        if (ratios) {
          setSupportedRatios(ratios);
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro ao obter os formatos suportados:", error);
    }
  };

  useEffect(() => {
    if (cameraRef) {
      getSuportedRatios();
    }
  }, [cameraRef]);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestPermission();
          }}
          title="grant permission"
        />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const toggleFlashMode = () => {
    setEnableFlash((current) =>
      current === FlashMode.off
        ? FlashMode.on
        : current === FlashMode.on
        ? FlashMode.torch
        : FlashMode.off
    );
  };

  const onGesture = Gesture.Pinch()
    .onStart((e) => (e.scale = zoomValue))
    .onUpdate((e) => {
      if (e.scale - 1 > 1) {
        e.scale = 2;
      }

      if (e.scale - 1 <= 0) {
        e.scale = 1;
      }

      if (e.scale - 1 <= 1 && e.scale - 1 >= 0) {
        setZoomValue(e.scale - 1);
      }
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.wrapperCamera}>
          <GestureDetector gesture={onGesture}>
            <Camera
              ref={(ref) => setCameraRef(ref)}
              style={
                Platform.OS === "android"
                  ? {
                      ...styles.androidCamera,
                      height:
                        Dimensions.get("window").width *
                        (Number(selectedRatio?.split(":")[0]) /
                          Number(selectedRatio?.split(":")[1])),
                    }
                  : styles.camera
              }
              type={type}
              zoom={zoomValue}
              flashMode={enableFlash}
              autoFocus={AutoFocus.on}
              ratio={Platform.OS === "android" ? selectedRatio : undefined}
              useCamera2Api={Platform.OS === "android"}
            />
          </GestureDetector>
        </View>
        <View style={styles.buttonBottomContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-android" size={30} color="#fff" />
          </TouchableOpacity>
          <Picker
            selectedValue={selectedRatio}
            onValueChange={setSelectedRatio}
            dropdownIconColor={"#fff"}
            mode="dropdown"
            style={styles.picker}
          >
            {suportedRatios?.map((ratio) => (
              <Picker.Item label={ratio} value={ratio} key={ratio} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
            <MaterialIcons
              name={
                enableFlash === FlashMode.off
                  ? "flash-off"
                  : enableFlash === FlashMode.on
                  ? "flash-on"
                  : "lightbulb-outline"
              }
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 40,
    backgroundColor: "#000",
  },
  wrapperCamera: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  androidCamera: {
    width: Dimensions.get("window").width,
  },
  camera: {
    flex: 1,
  },
  zoomValue: {
    fontSize: 60,
    color: "white",
    opacity: 0.8,
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  buttonBottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
  },
  picker: {
    width: 200,
    borderRadius: 10,
    color: "#fff",
  },
});
