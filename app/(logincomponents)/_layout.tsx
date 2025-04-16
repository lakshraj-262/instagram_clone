import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';



export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="firebaseConfig" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(logincomponents)" />
        <Stack.Screen name="(databases)" />
        <Stack.Screen name="email_signup" />
        <Stack.Screen name="login_number" />
        <Stack.Screen name="login_screen" />
        <Stack.Screen name="signup_screen" />
        <Stack.Screen name="index" />

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
