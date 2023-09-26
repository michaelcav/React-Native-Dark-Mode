import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-black flex-auto items-center justify-center">
      <Text className="text-white">hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

