import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Search() {
  const Navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
    
  

  const handlereelsClick = () => {
  Navigation.navigate('reels');
  };

  useEffect(() => {
    // Pokémon images with darker backgrounds
    const pokemonImages = [
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png', size: 'large' }, // Greninja
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png', size: 'small' }, // Gengar
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png', size: 'small' }, // Tyranitar
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png', size: 'large' }, // Charizard
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png', size: 'small' }, // Sableye
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png', size: 'large' }, // Absol
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png', size: 'small' }, // Weavile
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png', size: 'large' }, // Murkrow
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png', size: 'small' }, // Feraligatr
      { uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png', size: 'small' }, // Chandelure
    ];
    setImages(pokemonImages);
  }, []);

  return (
    <ThemedView style={styles.container}>
      {/* Search Bar */}
      <ThemedView style={styles.searchBar}>
        <Feather name="search" size={18} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </ThemedView>

      {/* Category Tabs (Images | Reels) */}
      <View style={styles.categoryContainer}>
  <TouchableOpacity onPress={() => console.log('Images clicked')}>
    <ThemedText type="title" style={styles.categoryText}>Images</ThemedText>
  </TouchableOpacity>

  <TouchableOpacity onPress={handlereelsClick}>
    <ThemedText type="title" style={[styles.categoryText, styles.reelsText]}>Reels</ThemedText>
  </TouchableOpacity>
</View>

      {/* Masonry Grid for Pinterest-Style Layout */}
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two-column grid
        columnWrapperStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={{ uri: item.uri }} style={item.size === 'large' ? styles.largeImage : styles.smallImage} />
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginHorizontal: 10,
    marginTop: 40,
    paddingVertical: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  reelsText: {
    color: 'white',
    borderBottomColor: 'transparent',
  },
  gridContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  smallImage: {
    width: width / 2.1, // Two columns with spacing
    height: width / 2, // Varying heights for Pinterest effect
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Grid visible
  },
  largeImage: {
    width: width / 2.1,
    height: width / 1.5, // Larger images for variety
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
