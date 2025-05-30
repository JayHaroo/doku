import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

export default function LocalForm() {
  const navigation = useNavigation();
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState<string[]>([]);

  const handleAddName = () => {
    if (newName.trim() === "") {
      Alert.alert("Error", "Please enter a valid name.");
      return;
    }
    setNames((prevNames) => [...prevNames, newName]);
    setNewName("");
  };

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: <Text className="text-white pl-2">Agreement</Text>,
        value: "option1",
      },
      {
        id: "2",
        label: <Text className="text-white pl-2">Lending / Rent</Text>,
        value: "option2",
      },
      {
        id: 3,
        label: <Text className="text-white pl-2">Loan</Text>,
        value: "option3",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("1");

  return (
    <View className="flex-1 items-center justify-evenly bg-black">
      <ScrollView className="w-full">
        <View className="items-center justify-center pt-[170px]">
          <Text className="text-white text-3xl font-satoshi p-5">Doku.</Text>
          <TextInput
            placeholder="Contract Name"
            placeholderTextColor="#E68E20"
            className="border-[#E68E20] text-[#E68E20] border rounded-full px-4 py-5 mt-4 w-[300px]"
          />
          <TextInput
            placeholder="Contract Address"
            placeholderTextColor="#E68E20"
            className="border-[#E68E20] text-[#E68E20] border rounded-full px-4 py-5 mt-4 w-[300px]"
          />
          <View className="p-5">
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
          <View className="flex flex-row">
            <TextInput
              placeholder="Add a name"
              placeholderTextColor="#E68E20"
              className="border-[#E68E20] text-[#E68E20] border rounded-full px-4 py-5 mt-4 w-[250px] mr-2"
              value={newName}
              onChangeText={setNewName}
            />

            <Pressable className="bg-[#E68E20] border rounded-full items-center justify-center px-4 py-5 mt-4" 
              onPress={handleAddName}>
              <Text>Add</Text>
            </Pressable>
          </View>

          <View className="mt-4">
            <Text className="text-white text-center font-satoshi p-2">
              Involved Parties:
            </Text>
            {names.map((name, index) => (
              <Text
                key={index}
                className="text-white text-center font-satoshi p-2"
              >
                {name}
              </Text>
            ))}
          </View>

          <Pressable className="bg-[#E68E20] border rounded-full px-4 py-2 mt-4 w-[300px] items-center">
            <Text className="text-black font-satoshi p-2">Deploy Contract</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Landing")}>
            <Text className="text-white underline underline-offset-auto p-2">
              {" "}
              Go back{" "}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <View className="">
        <Text className="text-white text-center font-satoshi p-5 mt-4 text-[10px]">
          By using Doku, you agree to our terms of service and privacy policy.
        </Text>
      </View>
    </View>
  );
}
