import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

function NumberContainer({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
    
})
