// src/screens/DadosFixos.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import StatusBarSim from '../components/StatusBarSim'; 

// Importe suas imagens.
const AVATAR_IMAGE = require('../../assets/avatar.png'); 
const MAP_IMAGE = require('../../assets/Local.png'); 

const screenWidth = Dimensions.get('window').width;

export default function MonitoramentoScreen() {
  const navigation = useNavigation();

  // Componente para o cartão glassmórfico.
  const GlassmorphicCard = ({ children, style }) => (
    <View style={[styles.glassCardBase, style]}>
      {/* A cor de base escura do cartão da imagem */}
      <View style={styles.cardOverlayColor} /> 
      <BlurView intensity={30} tint="light" style={styles.glassCardBlur}>
        {children}
      </BlurView>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.bg}>
      <View style={styles.overlay} />
      <StatusBarSim />

      <View style={styles.container}>
        
        {/* Botão Voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <BlurView intensity={40} tint="light" style={styles.backBlur}>
                <Image source={require('../../assets/voltar.png')} style={styles.backIcon} />
            </BlurView>
        </TouchableOpacity>

        <Text style={styles.title}>MONITORAMENTO</Text>

        {/* Cartão de Dados Principais */}
        <GlassmorphicCard style={styles.infoCard}>
          <View style={styles.infoContent}>
            
            {/* Avatar */}
            <Image source={AVATAR_IMAGE} style={styles.avatar} accessible={true} accessibilityLabel="Avatar de Paulo Cesar" />
            
            {/* Textos de Informação */}
            <View style={styles.textDataContainer}>
              <Text style={styles.nameText}>Paulo Cesar</Text>
              <Text style={styles.detailText}>79 anos de idade</Text>
              <Text style={styles.detailText}>Média de 71 bpm</Text>
              
              {/* Seção de Problemas */}
              <Text style={styles.problemsText}>
                <Text style={{fontWeight: '700'}}>Problemas:</Text> Nenhum
              </Text>
            </View>
          </View>
        </GlassmorphicCard>

        {/* Cartão de Residência */}
        <GlassmorphicCard style={styles.residenceCard}>
          <Text style={styles.residenceTitle}>Residência</Text>
          <View style={styles.mapContainer}>
            <Image source={MAP_IMAGE} style={styles.mapImage} resizeMode="cover" />
          </View>
        </GlassmorphicCard>
        
        <View style={{ height: 40 }} /> 
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // --- Estilos de Fundo e Layout Principal ---
  bg: { flex: 1, width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.1)' },
  container: { flex: 1, alignItems: 'center', paddingTop: 60, zIndex: 1, paddingHorizontal: 20 },

  // --- Botão Voltar ---
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    zIndex: 10,
  },
  backBlur: {
    width: 35,
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: { width: 18, height: 18, tintColor: '#000' },

  content: {
    alignItems: 'center',
    marginTop: 60,
  },

  // --- Título da Tela ---
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000', 
    marginTop: 0, 
    marginBottom: 20,
    textAlign: 'center',
  },

  // --- Estilos para o Glassmorphic Card (Base) ---
  glassCardBase: {
    width: screenWidth * 0.9,
    borderRadius: 20, 
    marginVertical: 10,
    overflow: 'hidden', 
    // Configurações de Sombra Aprimoradas
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 10 },
      android: { elevation: 15 },
    }),
  },
  // Cor de fundo escura (como na imagem) que fica por baixo do Blur
  cardOverlayColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 73, 94, 0.8)', // Azul/Cinza escuro semi-transparente
  },
  glassCardBlur: {
    ...StyleSheet.absoluteFillObject,
    // Garante que o conteúdo tenha padding fora do blur effect
    padding: 20, 
  },

  // --- Cartão de Dados Principais (Paulo Cesar) ---
  infoCard: {
    height: 180, // Definindo uma altura mais precisa baseada na imagem
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // O conteúdo da GlassmorphicCard já tem padding de 20
    position: 'relative', // Para o alinhamento da imagem
  },
  avatar: {
    width: 70, 
    height: 70,
    resizeMode: 'contain',
    marginRight: 15,
    // Ajuste para alinhar o avatar verticalmente no canto
  },
  textDataContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff', 
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#eee', 
    marginBottom: 5,
  },
  problemsText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
  },

  // --- Cartão de Residência ---
  residenceCard: {
    marginTop: 20,
  },
  residenceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    // Ajustado para compensar o padding do GlassCardBlur
    paddingLeft: 0, 
  },
  mapContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 16 / 9, 
    // Ajustado para que o mapa não tenha padding interno e fique borda a borda
    // com o padding da GlassCardBlur, mas ainda respeite as bordas arredondadas do cartão.
    margin: -20, // Remove o padding de 20 aplicado pelo GlassCardBlur
    marginTop: 0, 
    marginBottom: -20,
    width: screenWidth * 0.9 + 40, // Largura do card + 2x padding (20+20)
    
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});