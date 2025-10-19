import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigation/TabNavigator';
import DadosAtuais from './src/screens/dadosAtuais.js'; 
import DadosFixos from './src/screens/DadosFixos.js'; 
import Emergencia from './src/screens/Emergencia.js';
import Monitoramento from './src/screens/Monitoramento.js';
import Historico from './src/screens/Historico.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeTabs" component={TabNavigator} />
          <Stack.Screen name="DadosAtuais" component={DadosAtuais} /> 
          <Stack.Screen name="DadosFixos" component={DadosFixos} />
          <Stack.Screen name="Emergencia" component={Emergencia} />
          <Stack.Screen name="Monitoramento" component={Monitoramento} />
          <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
