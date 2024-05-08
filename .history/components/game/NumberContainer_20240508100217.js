import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import { Colors } from "react-native/Libraries/NewAppScreen";

function NumberContainer({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
  },
  numberText: {},
});
