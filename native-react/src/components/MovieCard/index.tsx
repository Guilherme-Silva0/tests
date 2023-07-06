import { Image, StyleSheet, TouchableOpacity } from 'react-native'

interface MovieCardProps {
  imageURL: ReturnType<typeof require>
  movieName: string
  vertical?: boolean
}

export const MovieCard = ({
  imageURL,
  movieName,
  vertical,
}: MovieCardProps) => {
  return (
    <TouchableOpacity>
      <Image
        source={imageURL}
        alt={movieName}
        style={
          vertical ? styles.movieImageVertical : styles.movieImageHorizaontal
        }
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  movieImageHorizaontal: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },

  movieImageVertical: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
})
