import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: {} | string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("Error Async Storage", e);
  }
};

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (e) {
    console.log("Error Async Storage", e);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("Error Async Storage", e);
  }
};
