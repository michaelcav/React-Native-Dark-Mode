import { View, Text, Switch } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900">
      <StatusBar style={colorScheme=='dark' ? 'light':'dark'}/>
      <View className="flex-row items-center">
        <Text className="text-xl dark:text-white">
          Toggle Theme</Text>
          <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      <Text className="dark:text-white">Open your mind!</Text>
    </View>
  );
}
