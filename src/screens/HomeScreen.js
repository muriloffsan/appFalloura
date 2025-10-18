import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import StatusBarSim from '../components/StatusBarSim';

export default function HomeScreen() {
  return (
    // Adicionado um View de Overlay para replicar o estilo do LoginScreen e melhorar a legibilidade
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.bg}>
      
      {/* Overlay para melhorar a legibilidade do texto e ícones brancos */}
      <View style={styles.overlay} /> 

      <StatusBarSim />
      
      <View style={styles.container}>
        {/* Row superior de ícones de navegação rápida */}
        <View style={styles.iconRowTop}>
          <TouchableOpacity style={styles.topIcon}><Ionicons name="person" size={26} color="#fff" /></TouchableOpacity>
          <TouchableOpacity style={styles.topIcon}><Ionicons name="alert" size={26} color="#fff" /></TouchableOpacity>
          <TouchableOpacity style={styles.topIcon}><Ionicons name="map" size={26} color="#fff" /></TouchableOpacity>
          <TouchableOpacity style={styles.topIcon}><Ionicons name="people" size={26} color="#fff" /></TouchableOpacity>
        </View>

        <View style={styles.logoBox}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </View>

        {/* Containers de botões principais */}
        <View style={styles.buttonsContainer}>
          <BlurView intensity={70} tint="light" style={styles.card}>
            <TouchableOpacity style={styles.cardContent}>
              <Ionicons name="watch" size={40} color="#fff" />
              <Text style={styles.cardText}>MONITORAMENTO</Text>
            </TouchableOpacity>
          </BlurView>

          <BlurView intensity={70} tint="light" style={styles.card}>
            <TouchableOpacity style={styles.cardContent}>
              <Ionicons name="alert-circle" size={40} color="#fff" />
              <Text style={styles.cardText}>EMERGÊNCIA</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
        
        {/* Adicionado espaço flexível para empurrar o conteúdo para cima */}
        <View style={{ flex: 1 }} /> 

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // CORREÇÃO ESSENCIAL: Garante que o background ocupe 100% da tela
  bg: { 
    flex: 1, 
    width: '100%', 
    height: '100%',
    resizeMode: 'cover' 
  },
  
  // Overlay para contraste, replicando o estilo do LoginScreen
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // 20% de opacidade preta
  },
  
  // O container deve ter flex: 1 e zIndex para ficar acima do overlay
  container: { 
    flex: 1, 
    zIndex: 1, 
    paddingTop: 60, 
    alignItems: 'center', 
    paddingHorizontal: 20, // Adicionado padding horizontal
  },
  
  // Novo estilo para a row de ícones superiores
  iconRowTop: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%', 
    paddingHorizontal: 30, // Espaçamento maior
    marginBottom: 20
  },
  topIcon: {
    padding: 10,
  },

  logoBox: {
    width: '90%', // Aumentado um pouco
    height: 100, // Ajustado a altura
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40, // Aumentado o espaço
  },
  logo: { width: 150, height: 60 },

  // A antiga iconRow foi substituída por iconRowTop. Mantenho o nome buttonsContainer
  buttonsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%', 
    marginTop: 20,
  },
  card: {
    width: '48%', // Usa porcentagem para ser responsivo
    aspectRatio: 1, // Mantém o card quadrado
    borderRadius: 25,
    overflow: 'hidden',
    // Usando uma cor mais escura para o blur ficar mais nítido
    backgroundColor: 'rgba(255,255,255,0.1)', 
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardText: { 
    color: '#fff', 
    marginTop: 10, 
    fontWeight: 'bold', 
    fontSize: 12, // Tamanho menor
    textAlign: 'center'
  },
});