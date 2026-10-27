import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InformationScreen() {
  return (
    <View className="flex-1 bg-[#fdf6f3]">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView edges={['top']} className="bg-white">
        <View className="flex-row items-center justify-between px-6 pb-4 pt-1">
          <Text className="text-lg font-extrabold text-gray-900">Informasi BRT</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
