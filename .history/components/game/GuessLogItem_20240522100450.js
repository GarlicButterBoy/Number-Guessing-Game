import React from "react";
import { View, Text } from "react-native";

function GuessLogItem({roundNumber, guess}) {
    return <View><Text>#{roundNumber}</Text><Text></Text></View>;
}

export default GuessLogItem;
