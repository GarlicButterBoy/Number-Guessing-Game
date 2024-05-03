import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  return (
    <Pressable onPress={}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
