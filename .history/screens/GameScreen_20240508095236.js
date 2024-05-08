import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors"
;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen() {


  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <Text>GUESS</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
