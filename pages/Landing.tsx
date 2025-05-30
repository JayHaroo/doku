import { View, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-evenly bg-black">
      <View className="items-center justify-center pt-[170px]">
        <Text className="text-white text-3xl font-satoshi p-5">Doku.</Text>
        <Pressable className="border-2 border-[#0053FE] border rounded-full px-4 py-2 mt-4"
          onPress={() => Alert.alert(
            "Coming Soon",
            "This feature is under development. Stay tuned for updates!",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          )}>
          <Text className="text-white font-jetbrains p-2">Create and deploy to BASE</Text>
        </Pressable>
        <Pressable className="border-white border rounded-full px-4 py-2 mt-4"
          onPress={() => navigation.navigate("LocalForm")}
        >
          <Text className="text-white font-jetbrains p-2">Create an agreement</Text>
        </Pressable>
      </View>
      <View className="pt-[120px]">
        <Text className="text-white text-center font-satoshi p-5 mt-4 text-[10px]">
          By using Doku, you agree to our terms of service and privacy policy.
        </Text>
      </View>
    </View>
  );
}
