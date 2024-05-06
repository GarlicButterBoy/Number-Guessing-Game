import React from "react";
import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <>
      <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: ""
    },
});
