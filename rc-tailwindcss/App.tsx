import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from "twrnc";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center gap-4 bg-slate-900`}>
      <Text style={tw`text-3xl font-semibold text-white`}>Hello Tailwind</Text>
      <TouchableOpacity style={tw`p-1 rounded-xl bg-blue-500`}>
        <MaterialIcons name="blur-on" size={30} color="white" />
      </TouchableOpacity>
      <StatusBar style='inverted'/>
    </View>
  );
}
