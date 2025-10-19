// src/navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EmergenciaScreen from '../screens/Emergencia';
import MonitoramentoScreen from '../screens/Monitoramento';
import HistoricoScreen from '../screens/Historico';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tela principal da aba */}
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      {/* Tela Emergência acessada via botão */}
      <Stack.Screen name="Emergencia" component={EmergenciaScreen} />
      <Stack.Screen name="Monitoramento" component={MonitoramentoScreen} />
      <Stack.Screen name="Historico" component={HistoricoScreen} />
    </Stack.Navigator>
  );
}
