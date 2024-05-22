import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.accent500,
    borderWidth: 1,
  },
});
