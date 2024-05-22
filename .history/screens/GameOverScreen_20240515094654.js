import { Text, View, Image } from "react-native";
import React from "react";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>Game is Over.</Title>
      <Image source={require("../assets/images/success.jpg")} />
    </View>
  );
}

export default GameOverScreen;