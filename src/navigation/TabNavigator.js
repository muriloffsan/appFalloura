import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 25,
          borderTopWidth: 0,
          height: 60,
          elevation: 0,
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="map" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
