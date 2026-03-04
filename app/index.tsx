import { Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
