import React from "react";
import { View, Text } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;
