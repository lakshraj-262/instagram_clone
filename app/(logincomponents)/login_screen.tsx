import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { auth } from "../firebaseConfig"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";

export default function login_screen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (username && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username) && username.length < 5) {
      setErrorMessage('Enter a valid email or username (at least 5 characters).');
    } else {
      setErrorMessage('');
    }

    if (password && password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  }, [username, password]);

  const navigation = useNavigation(); 

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Please fill in all fields.');
    } else if (errorMessage || passwordError) {
      alert('Fix the errors before logging in.');
    } else {
      try {
        await signInWithEmailAndPassword(auth, username, password);
        console.log('User signed in:', username);
        alert('Login successful!');
        navigation.navigate('(tabs)', { screen: 'home' });
      } catch (error) {
        console.error('Signin Error:', error);
        alert('Login failed. Please check your credentials.');
      }
    }
  };

  const handleSignUp = () => {
    navigation.navigate('(logincomponents)', { screen: 'signup_screen' });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.logoText}>Instagram</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Phone number, username or email address"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={{
                uri: passwordVisible
                  ? 'https://img.icons8.com/ios-glyphs/30/visible.png'
                  : 'https://img.icons8.com/ios-glyphs/30/invisible.png',
              }}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgotten password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
            style={styles.facebookIcon}
          />{' '}
          Log in with Google
        </Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 20,
    },
    logoText: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      fontFamily: 'Cochin',
    },
    box: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      backgroundColor: '#262626',
      color: '#fff',
      padding: 15,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#444',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#262626',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#444',
      marginBottom: 10,
      paddingLeft: 15,
    },
    inputPassword: {
      flex: 1,
      color: '#fff',
      paddingVertical: 15,
    },
    eyeIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      tintColor: '#999',
    },
    errorText: {
      color: '#FF6B6B',
      fontSize: 12,
      alignSelf: 'flex-start',
      marginLeft: 10,
      marginBottom: 10,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      color: '#0095f6',
      marginTop: -10,
      marginBottom: 20,
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#0095f6',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      color: '#888',
      marginVertical: 10,
    },
    facebookButton: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    facebookButtonText: {
      color: '#0095f6',
      fontSize: 16,
      fontWeight: 'bold',
    },
    facebookIcon: {
      width: 20,
      height: 20,
    },
    signupContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    signupText: {
      color: '#888',
    },
    signupLink: {
      color: '#0095f6',
      fontWeight: 'bold',
    },
});

