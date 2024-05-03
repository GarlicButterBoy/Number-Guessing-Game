import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: { backgroundColor: "#72063c" },
});
