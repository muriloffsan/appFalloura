// src/screens/Historico.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Componente para um cartão de histórico (Evento de Queda)
const FallHistoryCard = ({ local, horario, grau }) => {
  return (
    <BlurView intensity={20} tint="dark" style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Dados da queda:</Text>
        <Image source={require('../../assets/Exemplo 1.png')} style={styles.mapImage} />
        <Text style={styles.cardText}>Horario: {horario}</Text>
        <Text style={styles.cardText}>Grau da queda: {grau}</Text>
        <TouchableOpacity style={styles.verMaisButton}>
          <Text style={styles.verMaisButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default function HistoricoScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.bg}>
      <StatusBar style="dark" />
      <View style={styles.overlay} />

      <View style={styles.container}>
        
        {/* NOVO CONTÊINER PARA ALINHAR O TÍTULO E O BOTÃO */}
        <View style={styles.headerContainer}> 
            {/* Botão Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <BlurView intensity={40} tint="light" style={styles.backBlur}>
                    <Image source={require('../../assets/voltar.png')} style={styles.backIcon} />
                </BlurView>
            </TouchableOpacity>

            {/* --- Título alinhado --- */}
            <Text style={styles.title}>Historico de queda</Text>
        </View>
        {/* FIM DO NOVO CONTÊINER */}

        {/* Conteúdo principal - AGORA ESCROLÁVEL */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* ... Cartões ... */}
          <FallHistoryCard local="Rua Exemplo, 123" horario="11h 11min" grau="baixo" />
          <FallHistoryCard local="Av. Teste, 456" horario="17h 12min" grau="baixo" />
          <FallHistoryCard local="Praça da Liberdade" horario="09h 30min" grau="médio" />
          <FallHistoryCard local="Rua do Desenvolvedor, 789" horario="14h 05min" grau="alto" />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.15)' },

  container: {
    flex: 1,
    alignItems: 'center',
    // O padding superior será movido para o headerContainer
    paddingTop: 0, 
    zIndex: 1,
  },

  // NOVO ESTILO: Contêiner que alinha o botão e o título
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', // Alinha verticalmente no centro
    justifyContent: 'center', // Centraliza o conteúdo no eixo principal (horizontal)
    paddingTop: Platform.OS === 'android' ? 70 : 100, // Mantém o espaçamento superior aqui
    paddingHorizontal: 25,
    marginBottom: 30, // Usa esse estilo para dar espaço antes do ScrollView
  },

  backButton: {
    position: 'absolute', // Permite que ele fique fora do fluxo normal, sobreposto.
    // top: já não é necessário, pois o headerContainer lida com o alinhamento vertical
    left: 25,
    zIndex: 10,
  },
  backBlur: {
    width: 35,
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backIcon: { width: 18, height: 18, tintColor: '#000' },

  title: {
    fontSize: 22, 
    fontWeight: '700',
    color: '#000', 
    // Removido marginBottom daqui, agora está no headerContainer
    textAlign: 'center',
  },

  // Estilos para o ScrollView
  scrollContent: {
    paddingBottom: 40,
    alignItems: 'center', // Centraliza o conteúdo do ScrollView (os cartões)
  },

  // Estilos para os cartões de Glassmorfismo (sem alterações)
  cardContainer: {
    width: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cardContent: {
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  mapImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  verMaisButton: {
    backgroundColor: '#00C8F8',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
  },
  verMaisButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});