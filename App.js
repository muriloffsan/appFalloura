import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Adicionamos um View com flex: 1 para garantir que a NavigationContainer
    // ocupe 100% da altura da tela, permitindo que a LoginScreen (e seu ImageBackground)
    // se expandam corretamente.
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeTabs" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // Este estilo é crucial no componente de nível superior (App.js)
  container: {
    flex: 1, 
  },
});