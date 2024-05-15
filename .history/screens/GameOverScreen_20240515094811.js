import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>Game is Over.</Title>
      <Image source={require("../assets/images/success.png")} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  
});
