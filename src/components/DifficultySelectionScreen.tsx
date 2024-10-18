import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DifficultySelectionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleDifficultySelect = (difficulty: string) => {
    navigation.navigate('Game', { difficulty });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty Level</Text>
      <Button title="Easy" onPress={() => handleDifficultySelect('Easy')} />
      <Button title="Medium" onPress={() => handleDifficultySelect('Medium')} />
      <Button title="Hard" onPress={() => handleDifficultySelect('Hard')} />
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
    marginBottom: 30,
  },
});

export default DifficultySelectionScreen;
