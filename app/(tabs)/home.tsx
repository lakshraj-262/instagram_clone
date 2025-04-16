import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function home() {
  const navigation = useNavigation();
  
  const posts = [
    { 
      id: 1, 
      username: 'Pikachu', 
      likes: 10547, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
    { 
      id: 2, 
      username: 'Charizard', 
      likes: 2048, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    },
    { 
      id: 3, 
      username: 'Bulbasaur', 
      likes: 1390, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    { 
      id: 4, 
      username: 'Squirtle', 
      likes: 5600, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    { 
      id: 5, 
      username: 'Jigglypuff', 
      likes: 2349, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    },
    { 
      id: 6, 
      username: 'Gengar', 
      likes: 8700, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    },
    { 
      id: 7, 
      username: 'Eevee', 
      likes: 4530, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    },
    { 
      id: 8, 
      username: 'Snorlax', 
      likes: 9820, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    },
    { 
      id: 9, 
      username: 'Mewtwo', 
      likes: 3280, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    },
    { 
      id: 10, 
      username: 'Lucario', 
      likes: 1240, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    },
    { 
      id: 11, 
      username: 'Greninja', 
      likes: 7750, 
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png',
      profileImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    },
  ];

  const [likeStates, setLikeStates] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = { count: post.likes, liked: false, bookmarked: false };
      return acc;
    }, {})
  );

  const handleLikePress = (postId) => {
    setLikeStates((prevState) => {
      const post = prevState[postId];
      return {
        ...prevState,
        [postId]: {
          ...post,
          count: post.liked ? post.count - 1 : post.count + 1,
          liked: !post.liked,
        },
      };
    });
  };

  const handleBookmarkPress = (postId) => {
    setLikeStates((prevState) => {
      const post = prevState[postId];
      return {
        ...prevState,
        [postId]: {
          ...post,
          bookmarked: !post.bookmarked,
        },
      };
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <View key={index} style={styles.story}>
              <View style={styles.storyCircle}>
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                  }}
                  style={styles.storyImage}
                />
              </View>
              <Text style={styles.storyText}>Pokémon</Text>
            </View>
          ))}
      </ScrollView>

      
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <View style={styles.userInfo}>
                <Image
                  source={{
                    uri: post.profileImageUrl,
                  }}
                  style={styles.profilePic}
                />
                <Text style={styles.username}>{post.username}</Text>
              </View>
              <Feather name="more-horizontal" size={24} color="black" />
            </View>

            <Image
              source={{
                uri: post.imageUrl,
              }}
              style={styles.postImage}
            />

            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <TouchableOpacity onPress={() => handleLikePress(post.id)}>
                  <FontAwesome
                    name={likeStates[post.id].liked ? 'heart' : 'heart-o'}
                    size={24}
                    color={likeStates[post.id].liked ? 'red' : 'black'}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSpacing}>
                  <Feather name="message-circle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => handleBookmarkPress(post.id)}>
                <FontAwesome
                  name={likeStates[post.id].bookmarked ? 'bookmark' : 'bookmark-o'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.likesText}>{likeStates[post.id].count} likes</Text>
            <Text style={styles.caption}>
              <Text style={styles.username}>{post.username} </Text>
              Pokémon are awesome!
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 15,
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff8501',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyText: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
    color: '#333',
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  likesText: {
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 5,
  },
  caption: {
    marginHorizontal: 15,
    marginTop: 5,
  },
  
});
