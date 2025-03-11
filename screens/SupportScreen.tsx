import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SupportScreen() {
  const handleSupport = () => {
    Linking.openURL('https://www.buymeacoffee.com');
  };

  return (
    <LinearGradient      colors={['#FFD700', '#FFA500']}
      style={styles.container}
    >
      <View style={styles.content}>
        <MaterialCommunityIcons name="coffee" size={60} color="white" />
        <Text style={styles.title}>Support SmilePay</Text>
        <Text style={styles.description}>
          If you're enjoying SmilePay and want to support our mission of spreading smiles,
          consider buying us a coffee! Your support helps keep the app running and smile-worthy.
        </Text>
        <Pressable style={styles.supportButton} onPress={handleSupport}>
          <Text style={styles.supportButtonText}>Buy Me a Coffee</Text>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  supportButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  supportButtonText: {
    fontSize: 18,
    fontWeight: 'bold',    color: '#FFA500',
  },
});