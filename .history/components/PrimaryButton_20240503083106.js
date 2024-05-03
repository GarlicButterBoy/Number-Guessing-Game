import { View, Text, Pressable } from "react-native";

function PrimaryButton({children}) {
  return (
    <View>
          <Text>{ props.children}</Text>
    </View>
  );
}

export default PrimaryButton;
