import React from "react";
import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <>
      <View>
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
        flex:1,
    }
});
