import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const LeaderboardScreen: React.FC<{ route: any }> = ({ route }) => {
  const { leaderboard } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        renderItem={({ item, index }) => (
          <Text style={styles.scoreItem}>{index + 1}. Score: {item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {leaderboard.length === 0 && <Text>No scores yet!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreItem: {
    fontSize: 20,
    marginVertical: 5,
  },
});

export default LeaderboardScreen;
