import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import "./global.css";
import Landing from "./pages/Landing";
import LocalForm from "./pages/LocalForm";
import OnChainForm from "./pages/OnChainForm";

const Stack = createNativeStackNavigator();

function RootStack() {
  const [fontsLoaded] = useFonts({
    Satoshi: require("./assets/fonts/Satoshi-Variable.ttf"),
    Jetbrains: require("./assets/fonts/JetBrainsMono-VariableFont_wght.ttf")
  });

  if (!fontsLoaded) return null;
  return (
    <>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="LocalForm" component={LocalForm} />
        <Stack.Screen name="OnChainForm" component={OnChainForm} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
