import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!');
    }
  return (
    <Pressable onPress={}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
