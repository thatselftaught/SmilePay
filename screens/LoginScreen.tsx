import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const handleGoogleLogin = () => {
    // In a real app, this would handle Google Auth
    navigation.navigate('Home');
  };

  return (
    <LinearGradient colors={['#FFD700', '#FFA500']} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SmilePay</Text>
        <Image 
          source={{ uri: 'https://api.a0.dev/assets/image?text=happy%20smiling%20sun%20illustration%20cute%20minimal' }}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Start Spreading Smiles!</Text>
        
        <Pressable style={styles.googleButton} onPress={handleGoogleLogin}>
          <MaterialCommunityIcons name="google" size={24} color="#FFA500" />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  googleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
    marginLeft: 10,
  },
});