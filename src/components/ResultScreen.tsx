import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const { score } = route.params;

  const handleContinue = () => {
    navigation.navigate('DifficultySelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Training is Complete!</Text>
      <Text style={styles.score}>Final Score: {score}</Text>
      <Button title="Continue Training" onPress={handleContinue} />
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
  score: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ResultScreen;
