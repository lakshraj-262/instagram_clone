import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function email_signup() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleNext = () => {
    console.log("Email entered:", email);
  };

  const handleMobileSignup = () => {
    console.log("Sign up with mobile number");
    navigation.navigate("(logincomponents)", {
      screen: "signup_screen",
    });  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your email address?</Text>
      <Text style={styles.subtitle}>
        Enter the email address at which you can be contacted. No one will see this on your profile.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={handleMobileSignup}>
        <Text style={styles.linkButtonText}>Sign up with Mobile Number</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F2027",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 30,
    lineHeight: 20,
  },
  input: {
    height: 50,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#1F2933",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    alignItems: "center",
  },
  linkButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
