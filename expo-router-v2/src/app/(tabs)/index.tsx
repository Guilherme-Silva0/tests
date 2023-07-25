import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 44, fontWeight: '700' }}>Home</Text>
      <Link href="product/7" asChild>
        <Button title="Produto" />
      </Link>
    </View>
  )
}
