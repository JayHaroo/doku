import { View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function Landing() {
  const [fontsLoaded] = useFonts({
    Satoshi: require("../assets/fonts/Satoshi-Variable.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="items-center justify-center">
        <Text className="text-white text-3xl font-satoshi p-5">Doku.</Text>
        <Pressable className="border-[#E68E20] border rounded-full px-4 py-2 mt-4">
          <Text className="text-[#E68E20] font-satoshi p-2">Deploy to a blockchain</Text>
        </Pressable>
        <Pressable className="border-white border rounded-full px-4 py-2 mt-4">
          <Text className="text-white font-satoshi p-2">Create Local Contracts</Text>
        </Pressable>
      </View>
    </View>
  );
}
