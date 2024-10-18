import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

const GameScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { difficulty } = route.params;
  const [equation, setEquation] = useState('');
  const [magicStory, setMagicStory] = useState('');
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(difficulty === 'Easy' ? 30 : difficulty === 'Medium' ? 20 : 15);
  const [score, setScore] = useState(0);

  const generateEquation = () => {
    let num1, num2;

    switch (difficulty) {
      case 'Easy':
        num1 = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        break;
      case 'Medium':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 'Hard':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        break;
      default:
        num1 = num2 = 1;
    }

    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let scenario = '';
    switch (operation) {
      case '+':
        scenario = `Arithmetica needs to gather ${num1} magic crystals and ${num2} enchanted stones to cast a powerful spell. How many items does she have in total?`;
        break;
      case '-':
        scenario = `Arithmetica had ${num1} potions, but she used ${num2} to brew a new spell. How many potions are left?`;
        break;
      case '*':
        scenario = `Arithmetica has ${num1} spell books, and each book contains ${num2} spells. How many spells does she know in total?`;
        break;
      case '/':
        scenario = `Arithmetica found ${num1 * num2} magical ingredients and wants to distribute them evenly among ${num2} friends. How many ingredients will each friend get?`;
        break;
      default:
        scenario = '';
    }

    setEquation(`${num1} ${operation} ${num2}`);
    setMagicStory(scenario);
  };

  useEffect(() => {
    generateEquation();
  }, [difficulty]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkAnswer = () => {
    let correctAnswer: number;
    const [num1, operation, num2] = equation.split(' ');

    switch (operation) {
      case '+':
        correctAnswer = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        correctAnswer = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        correctAnswer = parseInt(num1) * parseInt(num2);
        break;
      case '/':
        correctAnswer = parseInt(num1) / parseInt(num2);
        break;
      default:
        return;
    }

    if (parseFloat(answer) === correctAnswer) {
      setScore(score + 10);
      generateEquation();
      setAnswer('');
      setTimeLeft((prevTime) => Math.min(prevTime + 5, 30));
    } else {
      Alert.alert('Incorrect!', 'Try again. Remember, magic takes practice!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solve the equation to cast the spell!</Text>
      <Text style={styles.magicStory}>{magicStory}</Text>
      <Text style={styles.equation}>{equation}</Text>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={(text) => setAnswer(text)}
        keyboardType="numeric"
        placeholder="Enter your answer"
      />
      <Button title="Submit" onPress={checkAnswer} />
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Button title="Finish Training" onPress={() => navigation.navigate('Result', { score })} />
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
    marginBottom: 10,
  },
  magicStory: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  equation: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
  },
  timer: {
    fontSize: 18,
    marginTop: 20,
  },
  score: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default GameScreen;
