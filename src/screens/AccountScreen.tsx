import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderDecoration from '../components/HeaderDecoration';
import { PlusIcon, UserIcon } from '../components/Icons';
import { useAuth } from '../context/AuthContext';
import { formatRupiah } from '../data/mockData';

export default function AccountScreen() {
  const { userName, userEmail } = useAuth();
  const balance = 46500;

  return (
    <View className="flex-1 bg-[#fdf6f3]">
      <StatusBar style="light" />
      <View className="overflow-hidden rounded-b-3xl bg-[#b33928] pb-14">
        <HeaderDecoration />
        <SafeAreaView edges={['top']}>
          <View className="flex-row items-center justify-between px-6 pb-2 pt-2">
            <Text className="text-lg font-extrabold text-white">Profil</Text>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView
        className="-mt-10 flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Kartu profil: foto dikosongkan, nama & email dari input user */}
        <View className="px-5">
          <View
            className="flex-row items-center gap-4 rounded-2xl bg-white p-4"
            style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 2 }}
          >
            <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <UserIcon size={30} color="#9ca3af" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold text-gray-900" numberOfLines={1}>
                {userName}
              </Text>
              <Text className="mt-1 text-sm text-gray-400" numberOfLines={1}>
                {userEmail}
              </Text>
            </View>
          </View>
        </View>

        {/* Kartu Saldo SambatPay */}
        <View className="mt-4 px-5">
          <View
            className="rounded-2xl bg-white p-4"
            style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 2 }}
          >
            <View className="flex-row items-start justify-between">
              <Text className="text-sm font-semibold text-gray-400">Saldo SambatPay</Text>
              <TouchableOpacity
                className="flex-row items-center gap-1.5 rounded-full bg-[#b33928] px-4 py-2"
                activeOpacity={0.8}
              >
                <PlusIcon size={16} color="#ffffff" />
                <Text className="text-xs font-bold text-white">Top Up</Text>
              </TouchableOpacity>
            </View>
            <Text className="mt-1 text-3xl font-extrabold text-gray-900">
              {formatRupiah(balance)}
            </Text>
            <Text className="mt-1 text-xs text-gray-400">
              Isi saldo untuk perjalanan lebih mudah
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
