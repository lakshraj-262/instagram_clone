import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';


export default function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigation = useNavigation(); 

  const handleLogin = () => {
    navigation.navigate('(logincomponents)',{
        screen : 'login_screen'
    });
    
 }

 const handleSignUp = () => {
  navigation.navigate('(logincomponents)',{
    screen : 'signup_screen'
});
 }

 const handleOpenInstagram = () => {
  const url = 'https://play.google.com/store/search?q=instagram&c=apps&hl=en';
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL: ", err)
  );
};
  

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          style={styles.languagePicker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="English (UK)" value="English (UK)" />
          <Picker.Item label="English (US)" value="English (US)" />
          <Picker.Item label="Español" value="Español" />
          <Picker.Item label="Français" value="Français" />
          <Picker.Item label="Deutsch" value="Deutsch" />
        </Picker>
      </View>

      <Text style={styles.title}>Instagram</Text>
      <Text style={styles.subTitle}>
        Sign up to see <Text style={styles.highlight}>photos</Text> and{' '}
        <Text style={styles.highlight}>videos</Text> from your friends.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenInstagram}>
        <Text style={styles.buttonText}>Open Instagram</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.link}>Log in</Text>
          </TouchableOpacity>{' '}
          or{' '}
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.link}>sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  languageContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    alignItems: 'center',
  },
  languagePicker: {
    color: '#fff',
    width: 200,
    backgroundColor: 'transparent',
  },
  title: {
    fontFamily: 'Billabong', // Use a custom font for Instagram logo-like text
    fontSize: 50,
    color: '#fff',
    marginBottom: 20,
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  highlight: {
    color: '#E1306C',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3897f0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  link: {
    color: '#3897f0',
    textDecorationLine: 'underline',
  },
});
