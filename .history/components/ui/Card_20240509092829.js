import React from "react";
import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;
