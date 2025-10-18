import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native'; // ✅ Importar
import StatusBarSim from '../components/StatusBarSim';

export default function HomeScreen() {
  const navigation = useNavigation(); // ✅ Hook de navegação

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.bg}>
      <View style={styles.overlay} />
      <StatusBarSim />

      <View style={styles.container}>
        <BlurView intensity={30} tint="light" style={styles.logoBox}>
          <Image source={require('../../assets/logo.png')} style={styles.logoImage} resizeMode="contain" />
        </BlurView>

        {/* Ícones de navegação rápida */}
        <View style={styles.iconRowMiddle}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/notificação.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/alerta.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/queda.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/mapa.png')} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.navigate('DadosAtuais')} // 👈 Navega para a tela desejada
          >
            <Image source={require('../../assets/iconevelho.png')} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>

        {/* Botões principais */}
        <View style={styles.buttonsContainer}>
          <BlurView intensity={70} tint="light" style={styles.card}>
            <TouchableOpacity style={styles.cardContent}>
              <Image source={require('../../assets/monitoramento.png')} style={styles.largeIcon} />
              <Text style={styles.cardText}>MONITORAMENTO</Text>
            </TouchableOpacity>
          </BlurView>

          <BlurView intensity={70} tint="light" style={styles.card}>
            <TouchableOpacity style={styles.cardContent}>
              <Image source={require('../../assets/emergencia.png')} style={styles.largeIcon} />
              <Text style={styles.cardText}>EMERGÊNCIA</Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        <View style={styles.spacer} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { 
    flex: 1, 
    width: '100%', 
    height: '100%',
    resizeMode: 'cover' 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  container: { 
    flex: 1, 
    zIndex: 1, 
    paddingTop: 60, 
    alignItems: 'center', 
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },

  // Título "FALLORA" no topo
  appTitle: {
    alignSelf: 'flex-start',
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: Platform.OS === 'android' ? 0 : -30, 
  },

  // Card Grande da Logo/Marca
  logoBox: {
    width: '95%',
    height: 150,
    borderRadius: 30, 
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  logoImage: {
    width: '80%', // Tamanho ajustado para caber bem no card
    height: '80%',
  },

  // Row de Ícones Pequenos (Navegação Rápida)
  iconRowMiddle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '95%',
    paddingHorizontal: 5,
    marginBottom: 40,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallIcon: {
    width: 26,
    height: 26,
    tintColor: '#444', // Aplicando a cor escura nas imagens PNG (se suportarem tint)
  },

  // Containers de botões principais (Monitoramento e Emergência)
  buttonsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '95%', 
  },
  card: {
    width: '48%', 
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardContent: {
    flex: 1,
    // ESSENCIAL: CENTRALIZAÇÃO
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  largeIcon: {
    width: 50,
    height: 50,
    marginBottom: 10, // Espaçamento entre o ícone e o texto
    tintColor: '#000', // Aplicando a cor preta nas imagens PNG
  },
  cardText: { 
    color: '#000', // Texto PRETO
    fontWeight: 'bold', 
    fontSize: 14, 
    textTransform: 'uppercase',
  },
  spacer: {
    flex: 1,
    paddingBottom: 80, 
  }
});