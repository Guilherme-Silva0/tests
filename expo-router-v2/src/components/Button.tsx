import { forwardRef } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={{
          paddingHorizontal: 22,
          paddingVertical: 8,
          backgroundColor: '#8A2BE2',
          borderRadius: 4,
        }}
        {...rest}
      >
        <Text style={{ color: '#efefef', fontSize: 16, fontWeight: '600' }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  },
)
