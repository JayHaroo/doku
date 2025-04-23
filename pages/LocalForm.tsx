import { View, Text, TextInput, Pressable } from 'react-native';

export default function LocalForm() {
    return(
        <View className="flex-1 items-center justify-evenly bg-black">
            <View className="items-center justify-center pt-[170px]">
                <Text className="text-white text-3xl font-satoshi p-5">Doku.</Text>
                <TextInput
                    placeholder="Contract Name"
                    placeholderTextColor="#E68E20"
                    className="border-[#E68E20] border rounded-full px-4 py-5 mt-4 w-[300px]"
                />
                <TextInput
                    placeholder="Contract Address"
                    placeholderTextColor="#E68E20"
                    className="border-[#E68E20] border rounded-full px-4 py-5 mt-4 w-[300px]"
                />
                <Pressable className="bg-[#E68E20] border rounded-full px-4 py-2 mt-4 w-[300px] items-center">
                    <Text className="text-black font-satoshi p-2">Deploy Contract</Text>
                </Pressable>
            </View>
            <View className="pt-[120px]">
                <Text className="text-white text-center font-satoshi p-5 mt-4 text-[10px]">
                    By using Doku, you agree to our terms of service and privacy policy.
                </Text>
            </View>
        </View>
    )
};