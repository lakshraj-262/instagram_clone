import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: "absolute",
          height: 65 + insets.bottom, // Ensure tab bar height is adjusted
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color="lightblue" />,
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color="lightblue" />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color="lightblue" />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="film.fill" color="lightblue" />,
        }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color="lightblue" />,
      }}
      />
    </Tabs>
  );
}
