import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
// Adiciona Platform para gerenciar a compatibilidade do LinearGradient
import { Platform } from 'react-native'; 

// Importa LinearGradient. Se for usar em Expo Web, pode ser necessário um fallback.
let LinearGradient;
try {
  // Tenta importar a versão completa (melhor para iOS/Android/Web)
  ({ LinearGradient } = require('expo-linear-gradient'));
} catch (e) {
  // Fallback se a importação falhar (comum na web se houver problemas de build)
  console.warn("Using LinearGradient fallback.");
  LinearGradient = ({ children, style, colors }) => (
    <View style={[style, { backgroundColor: colors ? colors[0] : '#4361EE' }]}>
      {children}
    </View>
  );
}


export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    // O estilo bg já tem 'flex: 1', garantindo que o ImageBackground ocupe o espaço
    // que o App.js liberou.
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.bg}>
      
      {/* Opcional: Adiciona um overlay sutil para melhorar a legibilidade */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.form}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
          
          <TouchableOpacity onPress={() => navigation.replace('HomeTabs')}>
            {/* O LinearGradient agora tem um fallback robusto */}
            <LinearGradient colors={['#00CFFF', '#4361EE']} style={styles.btn}>
              <Text style={styles.btnText}>ENTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // ESSENCIAL: Garante que o background preencha o espaço total.
  bg: { 
    flex: 1, 
    width: '100%', // Adicionado para garantia
    height: '100%', // Adicionado para garantia
    resizeMode: 'cover', 
    // Removemos 'justifyContent: center' daqui para centralizar apenas o conteúdo (container)
  },
  
  // Opcional: Overlay para escurecer/melhorar contraste do fundo
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // 20% de opacidade preta
  },

  // Garante que o conteúdo (logo e formulário) seja centralizado vertical e horizontalmente.
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, // Permite que o container se expanda sobre o background
    zIndex: 1, // Garante que o conteúdo fique acima do overlay
  },
  
  logo: { width: 180, height: 80, marginBottom: 30 },
  form: { width: '80%' },
  label: { color: '#FFF', fontWeight: '600', marginTop: 10, fontSize: 16 }, // Cor alterada para melhor contraste
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)', // Fundo do input mais claro
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 50, // Aumentado um pouco para usabilidade
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
  btn: {
    marginTop: 25,
    borderRadius: 25,
    paddingVertical: 14, // Aumentado para melhor toque
    alignItems: 'center',
    // Sombra para dar um toque mais moderno
    ...Platform.select({
      ios: {
        shadowColor: '#00CFFF',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }, // Aumentado para melhor leitura
});