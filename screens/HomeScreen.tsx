import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { toast } from 'sonner-native';

export default function HomeScreen() {
  const [smiles, setSmiles] = useState(0);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastSmileDate, setLastSmileDate] = useState(null);
  const [achievements, setAchievements] = useState({
    firstSmile: false,
    tenSmiles: false,
    threeDayStreak: false
  });
  
  const navigation = useNavigation();

  const handleSmile = () => {
    const today = new Date().toDateString();
    
    // Update smile count and points
    setSmiles(prev => prev + 1);
    setPoints(prev => prev + 10);

    // Handle streak
    if (lastSmileDate === null || lastSmileDate === today) {
      setStreak(prev => prev);
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastSmileDate === yesterday.toDateString()) {
        setStreak(prev => prev + 1);
        toast.success('Streak increased! 🔥');
      } else {
        setStreak(1);
      }
    }

    // Check achievements
    if (smiles === 0) {
      setAchievements(prev => ({ ...prev, firstSmile: true }));
      toast.success('Achievement: First Smile! 🌟');
    }
    if (smiles === 9) {
      setAchievements(prev => ({ ...prev, tenSmiles: true }));
      toast.success('Achievement: Smile Master! 🏆');
    }
    if (streak === 2) {
      setAchievements(prev => ({ ...prev, threeDayStreak: true }));
      toast.success('Achievement: 3 Day Streak! 🎯');
    }

    setLastSmileDate(today);
  };

  return (
    <LinearGradient
      colors={['#FFD700', '#FFA500']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Remember to Smile Today!</Text>
        <Pressable onPress={() => navigation.navigate('Support')} style={styles.supportButton}>
          <MaterialCommunityIcons name="coffee" size={24} color="white" />
        </Pressable>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Smile Count</Text>
            <Text style={styles.statValue}>{smiles}</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Points</Text>
            <Text style={styles.statValue}>{points}</Text>
          </View>
        </View>

        <View style={styles.streakCard}>
          <Text style={styles.statTitle}>Current Streak</Text>
          <Text style={styles.statValue}>{streak} days</Text>
        </View>

        {Object.entries(achievements).map(([key, achieved]) => (
          achieved && (
            <View key={key} style={styles.achievementCard}>
              <MaterialCommunityIcons name="trophy" size={24} color="#FFD700" />
              <Text style={styles.achievementText}>
                {key === 'firstSmile' && 'First Smile'}
                {key === 'tenSmiles' && 'Smile Master'}
                {key === 'threeDayStreak' && '3 Day Streak'}
              </Text>
            </View>
          )
        ))}

        <Pressable style={styles.smileButton} onPress={handleSmile}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=happy%20smiling%20emoji%20illustration%20cute%20minimal' }}
            style={styles.smileImage}
          />
          <Text style={styles.smileButtonText}>Log a Smile!</Text>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  supportButton: {
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 20,
    width: '47%',
    alignItems: 'center',
  },
  streakCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  statTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  statValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  achievementText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
  smileButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  smileImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 60,
  },
  smileButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});