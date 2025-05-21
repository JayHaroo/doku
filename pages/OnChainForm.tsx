import { View, Text, Pressable, ScrollView, Image } from 'react-native';

export default function OnChainForm() {
    return(
        <View className="flex-1 items-center justify-evenly bg-black">
            <Pressable className='border-2 border-[#0053FE] rounded-3xl'>
                <View className='flex flex-row items-center p-3'>
                    <Text className='text-white px-4 font-jetbrains'>Connect wallet</Text>
                </View>
            </Pressable>

        </View>
    )
}