import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const quotes = [
  "A smile is the shortest distance between two people.",
  "Life is better when you're smiling!",
  "Smile and the world smiles with you.",
  "Your smile brightens everyone's day!",
  "Every smile makes the world a little better.",
];

export default function LoadingScreen() {
  const [quote, setQuote] = useState(quotes[0]);
  const fadeAnim = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to Home screen after 6 seconds
    const timer = setTimeout(() => {      navigation.navigate('Login');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    });
  }, [quote]);

  return (
    <LinearGradient      colors={['#FFD700', '#FFA500']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>SmilePay</Text>
        <Animated.Text style={[styles.quote, { opacity: fadeAnim }]}>
          {quote}
        </Animated.Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  quote: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
  },
});