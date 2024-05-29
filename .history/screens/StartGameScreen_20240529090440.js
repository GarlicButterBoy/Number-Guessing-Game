import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTop = height < 420 ? 30 : 75;

  return (
    <KeyboardAvoidingView>
      <View style={[styles.rootContainer, { marginTop: marginTop }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Choose a Number (1-99)</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          ></TextInput>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: marginTop,
    alignItems: "center",
  },
});
