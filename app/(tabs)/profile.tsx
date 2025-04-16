import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg' }} // Replace with actual URL
          style={styles.profileImage}
        />
        <Text style={styles.username}>lakshraj.262</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>3 posts</Text>
          <Text style={styles.stat}>243 followers</Text>
          <Text style={styles.stat}>239 following</Text>
        </View>
        <Text style={styles.fullName}>लक्ष्य राज सिंह ⚡</Text>
        <Text style={styles.bio}># Stubborn</Text>
        <Text style={styles.role}>🏀 Basketball player 🏀</Text>
      </View>
      <View style={styles.editButtons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gallery}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://thumbs.dreamstime.com/b/two-cute-kittens-cuddle-closely-enjoying-warm-moment-affection-comfort-together-342820276.jpg' }}
        style={styles.image}
      />
      
      <Image
        source={{ uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://tinypng.com/images/social/website.jpg' }}
        style={styles.image}
      />
      
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  stats: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  stat: {
    color: 'white',
    marginHorizontal: 10,
  },
  fullName: {
    color: 'white',
    fontSize: 16,
  },
  bio: {
    color: 'gray',
  },
  role: {
    color: 'white',
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  shareButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%', // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom: 10,
  },
});