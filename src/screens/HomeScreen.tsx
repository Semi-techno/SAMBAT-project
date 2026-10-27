import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderDecoration from '../components/HeaderDecoration';
import {
    BellIcon,
    BusIcon,
    PinIcon,
    SearchIcon
} from '../components/Icons';
import MapPreview from '../components/MapPreview';
import { useAuth } from '../context/AuthContext';
import { nearbyStops } from '../data/mockData';

export default function HomeScreen() {
  const { userName } = useAuth();

  return (
    <View className="flex-1 bg-[#fdf6f3]">
      <StatusBar barStyle="light-content" backgroundColor="#b33928" />
      <View className="overflow-hidden rounded-b-3xl bg-[#b33928] pb-14">
        <HeaderDecoration />
        <SafeAreaView edges={['top']}>
          <View className="flex-row items-start justify-between px-6 pt-2">
            <View className="flex-1 pr-3">
              <Text className="text-lg font-extrabold text-white" numberOfLines={1}>
                Welcome, {userName}
              </Text>
              <Text className="mt-0.5 text-xs text-white/80">
                Hati-hati sampai tujuan dengan selamat
              </Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-xl bg-white/15" activeOpacity={0.7}>
                <BellIcon size={20} color="#ffffff" />
                <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-yellow-300" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView
        className="-mt-10 flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5">
          <View
            className="rounded-2xl bg-white p-4"
            style={{ shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 6 }}
          >
            <View className="flex-row items-center gap-2">
              <PinIcon size={16} color="#b33928" />
              <Text className="text-xs font-semibold text-gray-400">Lokasi kamu sekarang</Text>
            </View>
            <View className="mt-2 rounded-xl bg-gray-100 px-3.5 py-3">
              <Text className="text-sm font-medium text-gray-700">
                Jl. Gajahmada No.II4, Pekunden, Kec. Semarang
              </Text>
            </View>
            <View className="mt-3 flex-row items-center gap-2 rounded-xl border border-[#b33928]/30 bg-[#b33928]/5 px-3.5 py-3">
              <SearchIcon size={20} color="#b33928" />
              <TextInput
                placeholder="Mau kemana hari ini?"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-sm text-gray-700"
              />
            </View>
          </View>
        </View>

        <View className="mt-6 px-5">
          <Text className="mb-3 text-base font-extrabold text-gray-900">Halte Terdekat</Text>
          <View className="gap-2.5">
            {nearbyStops.map((stop) => (
              <View
                key={stop.id}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-3"
                style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 2 }}
              >
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#b33928]/10">
                  <BusIcon size={20} color="#b33928" />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-gray-900" numberOfLines={1}>
                    {stop.name}
                  </Text>
                  <Text className="text-xs text-gray-400">{stop.distance} m</Text>
                </View>
                <View className="rounded-full bg-[#b33928]/10 px-3 py-1.5">
                  <Text className="text-[11px] font-bold text-[#b33928]">{stop.eta}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="mt-6 px-5">
          <Text className="mb-3 text-base font-extrabold text-gray-900">Lokasi Halte</Text>
          <View
            className="h-44 overflow-hidden rounded-2xl bg-white"
            style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 2 }}
          >
            <MapPreview />
            <View className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1">
              <Text className="text-[11px] font-bold text-gray-700">Semarang City</Text>
            </View>
            <TouchableOpacity className="absolute bottom-3 right-3 rounded-full bg-[#b33928] px-4 py-2" activeOpacity={0.8}>
              <Text className="text-xs font-bold text-white">Buka peta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
