import React from "react";
import { View, Text } from "react-native";

function GuessLogItem({roundNumber, guess}) {
    return <View><Text>#{roundNumber}</Text></View>;
}

export default GuessLogItem;
