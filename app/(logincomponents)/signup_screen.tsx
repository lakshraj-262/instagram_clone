import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const countryCodes = [
  { label: '+1 (USA)', value: '1' },
  { label: '+44 (UK)', value: '44' },
  { label: '+91 (India)', value: '91' },
  // Add more country codes as needed
];

export default function Signup_screen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countryCodes[0].value);
  const navigation = useNavigation();

  const emailSignup = () => { 
    navigation.navigate('(logincomponents)', {
      screen: 'email_signup'
    });
  };

  const handleNext = () => {
    navigation.navigate('(logincomponents)', {
      screen: 'login_number',
        params: {
            mobileNumber: mobileNumber,
            countryCode: countryCode,
        },

    });
  }


  useEffect(() => {
    // Limit mobile number to 10 digits
    if (mobileNumber.length > 10) {
      setMobileNumber(mobileNumber.slice(0, 10));
    }
  }, [mobileNumber]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's your mobile number?</Text>
      <Text style={styles.subText}>
        Enter the mobile number on which you can be contacted. No one will see this on your profile.
      </Text>

      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCountryCode(value)}
          items={countryCodes}
          style={pickerSelectStyles}
          value={countryCode}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          placeholderTextColor="#8e8e8e"
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10} // This will also limit the input to 10 characters
        />
      </View>

      <Text style={styles.infoText}>
        You may receive WhatsApp and SMS notifications from us for security and login purposes.
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailSignupButton} onPress={emailSignup}>
        <Text style={styles.emailSignupText}>Sign up with email address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#d1d1d6',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#3a3a3c',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#3a3a3c',
  },
  infoText: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailSignupButton: {
    borderWidth: 1,
    borderColor: '#8e8e93',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  emailSignupText: {
    color: '#8e8e93',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3a3a3c',
    borderRadius: 8,
    backgroundColor: '#3a3a3c',
    marginRight: 10,
    flex: 0.3,
  },
  inputAndroid: {
    fontSize: 16,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3a3a3c',
    borderRadius: 8,
    backgroundColor: '#3a3a3c',
    marginRight: 10,
    flex: 0.3,
  },
});