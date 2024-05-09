import React from "react";
import { Text } from "react-native";

function InstructionText({children}) {
  return <Text style={styles.instructionText}>Choose a Number (1-99)</Text>;
}

export default InstructionText;
