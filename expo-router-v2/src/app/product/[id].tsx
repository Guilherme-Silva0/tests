import { Link, useLocalSearchParams } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Product() {
  const { id } = useLocalSearchParams()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', left: 26, top: 5 }}>
        <Link replace href="/" asChild>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back-ios" size={24} />
          </TouchableOpacity>
        </Link>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 44, fontWeight: '700' }}>
          Produto id: {id}
        </Text>
      </View>
    </View>
  )
}
