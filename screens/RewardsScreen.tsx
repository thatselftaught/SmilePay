import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toast } from 'sonner-native';

const REWARDS = [
  { id: 1, name: 'Coffee Voucher', points: 100, icon: 'coffee' },
  { id: 2, name: 'Movie Ticket', points: 200, icon: 'movie' },
  { id: 3, name: 'Restaurant Coupon', points: 300, icon: 'food' },
  { id: 4, name: 'Shopping Discount', points: 400, icon: 'shopping' },
];

export default function RewardsScreen() {
  const userPoints = 250; // This would come from your state management

  const handleRedeem = (reward) => {
    if (userPoints >= reward.points) {
      toast.success(`Redeemed ${reward.name}!`);
    } else {
      toast.error('Not enough points!');
    }
  };

  return (
    <LinearGradient colors={['#FFD700', '#FFA500']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rewards</Text>
        <View style={styles.pointsCard}>
          <Text style={styles.pointsLabel}>Your Points</Text>
          <Text style={styles.pointsValue}>{userPoints}</Text>
        </View>
      </View>

      <ScrollView style={styles.rewardsList}>
        {REWARDS.map((reward) => (
          <Pressable
            key={reward.id}
            style={styles.rewardCard}
            onPress={() => handleRedeem(reward)}
          >
            <MaterialCommunityIcons name={reward.icon} size={30} color="#FFA500" />
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardName}>{reward.name}</Text>
              <Text style={styles.rewardPoints}>{reward.points} points</Text>
            </View>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color="#FFA500" 
            />
          </Pressable>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  pointsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  pointsLabel: {
    color: 'white',
    fontSize: 16,
  },
  pointsValue: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  rewardsList: {
    padding: 20,
  },
  rewardCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rewardInfo: {
    flex: 1,
    marginLeft: 15,
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  rewardPoints: {
    fontSize: 14,
    color: '#FFA500',
    opacity: 0.8,
  },
});