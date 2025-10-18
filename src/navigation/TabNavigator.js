import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

// Placeholder components for new screens
const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }} />;

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        // Adicionado para melhor centralização vertical dos ícones
        tabBarItemStyle: { 
          paddingVertical: 5,
        }
      }}
    >
      {/* 1. Home Screen (Central) */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={28} color={focused ? '#000' : '#444'} />
          ),
        }}
      />
      
      {/* 2. Dados Fixos do Idoso (Caderno/Prancheta) */}
      <Tab.Screen
        name="DadosFixos"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'reader' : 'reader-outline'} size={28} color={focused ? '#000' : '#444'} />
          ),
        }}
      />

      {/* 3. Mapa/Localização */}
      <Tab.Screen
        name="Mapa"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'map' : 'map-outline'} size={28} color={focused ? '#000' : '#444'} />
          ),
        }}
      />
      
      {/* 4. Perfil */}
      <Tab.Screen
        name="Perfil"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={28} color={focused ? '#000' : '#444'} />
          ),
        }}
      />
      
      {/* 5. Configurações (Engrenagem) */}
      <Tab.Screen
        name="Configuracoes"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={28} color={focused ? '#000' : '#444'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    // Alterado para um fundo semi-transparente branco para melhor contraste
    backgroundColor: 'rgba(255, 255, 255, 0.75)', 
    borderRadius: 25,
    borderTopWidth: 0,
    height: 65, // Aumentado ligeiramente a altura para dar mais espaço
    elevation: 0,
    // Cores escuras para a sombra para combinar com o glassmorphism
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});