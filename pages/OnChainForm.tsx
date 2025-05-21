import { View, Text, Pressable, ScrollView, Image } from 'react-native';

export default function OnChainForm() {
    return(
        <View className="flex-1 items-center justify-evenly bg-black">
            <Pressable className='border-2 border-[#FF5C16] rounded-3xl'>
                <View className='flex flex-row items-center p-3'>
                    <Image 
                    className='object-contain w-[40px] h-[40px] font-jetbrains'
                    source={require('../assets/metamask.png')}
                    />
                    <Text className='text-white px-4'>Connect to metamask</Text>
                </View>
            </Pressable>

        </View>
    )
}