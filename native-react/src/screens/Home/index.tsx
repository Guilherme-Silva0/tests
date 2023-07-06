import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { MOVIESWATCHING } from '../../utils/moviesWatching'
import { MovieCard } from '../../components/MovieCard'
import { MOVIESCRIME } from '../../utils/moviesCrimes'
import { MOVIESWATCH } from '../../utils/moviesWatch'
import React from 'react'
export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/prime_video.png')}
          alt="Prime Video logo"
        />
        <Image
          source={require('../../assets/amazon_logo.png')}
          alt="Amazon logo"
          style={styles.amazonLogoImg}
        />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Tv Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image
            source={require('../../assets/movies/wheel_of_time.png')}
            alt=""
            style={styles.movieImage}
          />
        </TouchableOpacity>

        <Text style={styles.sessionTitle}>Continue watching</Text>

        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <MovieCard movieName={item.name} imageURL={item.moviesURL} />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sessionTitle}>Crime Movies</Text>

        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <MovieCard movieName={item.name} imageURL={item.moviesURL} />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sessionTitle}>Watch in your language</Text>

        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <MovieCard
              movieName={item.name}
              imageURL={item.moviesURL}
              vertical
            />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232f3e',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },

  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#efefef',
  },

  movieImageThumbnail: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },

  movieImage: {
    width: '100%',
    height: '100%',
  },

  scrollContainer: {
    width: '100%',
    paddingBottom: 20,
  },

  sessionTitle: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '600',
    color: '#efefef',
  },
  contentList: {
    gap: 10,
  },
})
