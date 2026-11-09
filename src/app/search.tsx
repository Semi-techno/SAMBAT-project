import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  LocationIcon,
  PinIcon,
  SearchIcon,
  VerticalSwapIcon,
} from '../components/Icons';
import {
  destinationHalteOptions,
  recentSearches,
  type HalteChoice,
} from '../data/mockData';

export default function SearchScreen() {
  const router = useRouter();

  const [origin, setOrigin] = useState<string>(
    'Jl. Gajahmada No. 184, Pekunden, Kec. Semarang'
  );
  const [destination, setDestination] = useState<string>(
    'Binus University @POJ City'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isHalteModalVisible, setIsHalteModalVisible] =
    useState<boolean>(false);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSelectHalte = (halte: HalteChoice) => {
    setDestination(halte.name);
    setIsHalteModalVisible(false);
  };

  const handleRecentPress = (halteName: string) => {
    setDestination(halteName);
    router.push({
      pathname: '/route',
      params: { destination: halteName, origin },
    });
  };

  const handleSearchRoute = () => {
    if (!destination.trim()) return;
    router.push({
      pathname: '/route',
      params: { destination, origin },
    });
  };

  const filteredHalteList = destinationHalteOptions.filter(
    (h) =>
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-[#fdf6f3]">
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} className="bg-white">
        <View className="flex-row items-center justify-between border-b border-gray-100 px-4 py-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-xl active:bg-gray-100"
            activeOpacity={0.7}
          >
            <ArrowLeftIcon size={22} color="#1f2937" />
          </TouchableOpacity>
          <Text className="text-base font-extrabold text-gray-900">
            Pencarian
          </Text>
          <View className="h-10 w-10" />
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        <View className="px-5 pt-4">
          <View
            className="rounded-2xl bg-white p-4"
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 4 },
              elevation: 4,
            }}
          >
            <View className="flex-row items-center">
              <View className="flex-1 pr-2">
                <View className="flex-row items-start gap-3">
                  <View className="mt-1">
                    <LocationIcon size={18} color="#2563eb" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xs font-semibold text-gray-400">
                      Lokasi saya
                    </Text>
                    <Text
                      className="mt-0.5 text-sm font-bold text-gray-800"
                      numberOfLines={1}
                    >
                      {origin}
                    </Text>
                  </View>
                </View>

                <View className="my-3 ml-2.5 h-[1px] bg-gray-100" />

                <TouchableOpacity
                  onPress={() => setIsHalteModalVisible(true)}
                  activeOpacity={0.7}
                  className="flex-row items-start gap-3"
                >
                  <View className="mt-1">
                    <PinIcon size={18} color="#b33928" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xs font-semibold text-[#b33928]">
                      Pilih Halte Tujuan (Turun)
                    </Text>
                    <Text
                      className={`mt-0.5 text-sm font-bold ${destination ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      numberOfLines={1}
                    >
                      {destination || 'Pilih halte tujuan...'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={handleSwap}
                activeOpacity={0.7}
                className="h-10 w-10 items-center justify-center rounded-xl bg-red-50 active:bg-red-100"
              >
                <VerticalSwapIcon size={18} color="#b33928" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleSearchRoute}
              activeOpacity={0.8}
              className="mt-4 w-full items-center justify-center rounded-xl bg-[#b33928] py-3.5 shadow-sm active:bg-[#9a2f20]"
            >
              <Text className="text-sm font-bold text-white">Cari Rute</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-6 px-5">
          <Text className="mb-3 text-sm font-extrabold text-gray-900">
            Pencarian Terbaru
          </Text>

          <View className="gap-3">
            {recentSearches.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleRecentPress(item.title)}
                activeOpacity={0.7}
                className="flex-row items-center gap-3.5 rounded-2xl bg-white p-3.5 border border-gray-100"
                style={{
                  shadowColor: '#000',
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 2,
                }}
              >
                <View className="h-11 w-11 items-center justify-center rounded-full border-2 border-[#b33928] bg-red-50">
                  <ClockIcon size={20} color="#b33928" />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-gray-900">
                    {item.title}
                  </Text>
                  <Text
                    className="mt-0.5 text-xs text-gray-500"
                    numberOfLines={2}
                  >
                    {item.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={isHalteModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsHalteModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="max-h-[82%] rounded-t-3xl bg-white p-5 shadow-2xl">
            <View className="mb-3 flex-row items-center justify-between border-b border-gray-100 pb-3">
              <View>
                <Text className="text-base font-extrabold text-gray-900">
                  Pilih Halte Tujuan (Turun)
                </Text>
                <Text className="text-xs text-gray-500">
                  Pilih salah satu halte pemberhentian yang tersedia
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsHalteModalVisible(false)}
                className="h-8 w-8 items-center justify-center rounded-full bg-gray-100"
              >
                <Text className="text-sm font-bold text-gray-500">✕</Text>
              </TouchableOpacity>
            </View>

            <View className="mb-3 flex-row items-center gap-2 rounded-xl bg-gray-100 px-3.5 py-2.5">
              <SearchIcon size={16} color="#9ca3af" />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Cari nama halte atau lokasi..."
                placeholderTextColor="#9ca3af"
                className="flex-1 text-xs text-gray-800 p-0"
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Text className="text-xs text-gray-400">Clear</Text>
                </TouchableOpacity>
              )}
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              <View className="gap-2.5">
                {filteredHalteList.map((halte) => {
                  const isSelected = destination === halte.name;
                  return (
                    <TouchableOpacity
                      key={halte.id}
                      onPress={() => handleSelectHalte(halte)}
                      activeOpacity={0.7}
                      className={`flex-row items-center justify-between rounded-2xl p-3.5 border ${isSelected
                          ? 'border-[#b33928] bg-red-50/50'
                          : 'border-gray-100 bg-gray-50/70'
                        }`}
                    >
                      <View className="flex-1 pr-3">
                        <Text
                          className={`text-sm font-bold ${isSelected ? 'text-[#b33928]' : 'text-gray-900'
                            }`}
                        >
                          {halte.name}
                        </Text>
                        <Text
                          className="mt-0.5 text-xs text-gray-500"
                          numberOfLines={1}
                        >
                          {halte.address}
                        </Text>
                        <View className="mt-1.5 flex-row flex-wrap gap-1.5">
                          {halte.corridors.map((c, i) => (
                            <View
                              key={i}
                              className="rounded-md bg-red-100/70 px-2 py-0.5"
                            >
                              <Text className="text-[10px] font-semibold text-[#b33928]">
                                {c}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>

                      {isSelected && (
                        <View className="h-6 w-6 items-center justify-center rounded-full bg-[#b33928]">
                          <CheckIcon size={14} color="#ffffff" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
