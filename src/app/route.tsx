import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon,
  BusIcon,
  CheckIcon,
  ClockIcon,
  LocationIcon,
  PinIcon,
  VerticalSwapIcon,
} from '../components/Icons';
import {
  currentUser,
  formatRupiah,
  getRouteOptionsForDestination,
  type RouteOptionItem,
} from '../data/mockData';

export default function RoutesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    destination?: string;
    origin?: string;
  }>();

  const [origin, setOrigin] = useState<string>(
    params.origin || 'Jl. Gajahmada No. 184, Pekunden, Kec. Semarang'
  );
  const [destination, setDestination] = useState<string>(
    params.destination || 'Binus University @POJ City'
  );

  const routeOptions = getRouteOptionsForDestination(destination);
  const [selectedRouteId, setSelectedRouteId] = useState<string>(
    routeOptions[0]?.id || 'rute-1'
  );
  const [isConfirmModalVisible, setIsConfirmModalVisible] =
    useState<boolean>(false);
  const [isTripStarted, setIsTripStarted] = useState<boolean>(false);

  const selectedRoute =
    routeOptions.find((r) => r.id === selectedRouteId) || routeOptions[0];

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleStartTrip = () => {
    setIsTripStarted(true);
  };

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
            Rute Perjalanan
          </Text>
          <View className="h-10 w-10" />
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
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
                {/* Origin */}
                <View className="flex-row items-center gap-2.5">
                  <LocationIcon size={16} color="#2563eb" />
                  <Text
                    className="flex-1 text-xs font-semibold text-gray-700"
                    numberOfLines={1}
                  >
                    {origin}
                  </Text>
                </View>

                <View className="my-2.5 ml-2 h-[1px] bg-gray-100" />

                <View className="flex-row items-center gap-2.5">
                  <PinIcon size={16} color="#b33928" />
                  <Text
                    className="flex-1 text-xs font-bold text-gray-900"
                    numberOfLines={1}
                  >
                    {destination}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSwap}
                activeOpacity={0.7}
                className="h-9 w-9 items-center justify-center rounded-xl bg-red-50 active:bg-red-100"
              >
                <VerticalSwapIcon size={16} color="#b33928" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-4 px-5">
          <View className="flex-row items-center justify-between rounded-2xl bg-white p-1.5 border border-gray-200">
            <View className="flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-[#b33928] py-2.5">
              <Text className="text-xs font-bold text-white">
                Rute Tercepat & Terhemat
              </Text>
              <View className="rounded-full bg-white/20 px-2 py-0.5">
                <Text className="text-[10px] font-bold text-white">
                  Flat Rp3.500
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-5 px-5">
          <Text className="text-sm font-extrabold text-gray-900">
            Pilihan Rute & Tarif
          </Text>
          <Text className="text-xs text-gray-500">
            Pilih rute bus yang ingin Anda gunakan ke tujuan
          </Text>
        </View>

        <View className="mt-3 gap-3 px-5">
          {routeOptions.map((option: RouteOptionItem) => {
            const isSelected = selectedRouteId === option.id;

            return (
              <TouchableOpacity
                key={option.id}
                onPress={() => setSelectedRouteId(option.id)}
                activeOpacity={0.85}
                className={`overflow-hidden rounded-2xl bg-white p-4 border ${isSelected
                  ? 'border-[#b33928] bg-red-50/20'
                  : 'border-gray-100'
                  }`}
                style={{
                  shadowColor: '#000',
                  shadowOpacity: isSelected ? 0.1 : 0.05,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 3 },
                  elevation: isSelected ? 4 : 2,
                }}
              >
                {isSelected && (
                  <View className="mb-2 self-start rounded-full bg-[#b33928] px-2.5 py-0.5">
                    <Text className="text-[10px] font-bold text-white">
                      Rute Dipilih
                    </Text>
                  </View>
                )}

                <View className="flex-row items-start gap-3">
                  <View
                    className="w-28 items-center rounded-xl border border-red-200 bg-red-50/70 p-2.5"
                  >
                    <Text className="text-base font-extrabold text-[#b33928]">
                      {formatRupiah(option.price)}
                    </Text>
                    <Text className="mt-0.5 text-center text-xs font-semibold text-gray-700">
                      {option.duration}
                    </Text>

                    <View className="mt-2.5 w-full border-t border-red-100 pt-2">
                      <View className="flex-row items-center justify-around">
                        <View className="flex-row items-center gap-1">
                          <BusIcon size={12} color="#b33928" />
                          <Text className="text-[10px] font-bold text-gray-700">
                            {option.busChanges} Bus
                          </Text>
                        </View>
                        <View className="h-3 w-[1px] bg-red-200" />
                        <View className="flex-row items-center gap-1">
                          <Text className="text-[10px] font-bold text-gray-600">
                            {option.transitCount}x
                          </Text>
                        </View>
                      </View>

                      <View className="mt-2 flex-row items-center justify-center gap-1">
                        <ClockIcon size={10} color="#b33928" />
                        <Text className="text-[9px] font-semibold text-gray-500">
                          {option.timeRange}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View className="flex-1 justify-center py-1">
                    {option.steps.map((step, idx) => {
                      const isFirst = idx === 0;
                      const isLast = idx === option.steps.length - 1;

                      return (
                        <View key={step.id} className="relative flex-row items-start pb-4">
                          {!isLast && (
                            <View className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-red-200" />
                          )}

                          <View className="mr-2.5 mt-0.5">
                            {isFirst ? (
                              <View className="h-4 w-4 items-center justify-center rounded-full bg-[#b33928]">
                                <View className="h-1.5 w-1.5 rounded-full bg-white" />
                              </View>
                            ) : isLast ? (
                              <View className="h-4 w-4 items-center justify-center rounded-full bg-emerald-600">
                                <View className="h-1.5 w-1.5 rounded-full bg-white" />
                              </View>
                            ) : (
                              <View className="h-4 w-4 items-center justify-center rounded-full border-2 border-[#b33928] bg-white">
                                <View className="h-1.5 w-1.5 rounded-full bg-[#b33928]" />
                              </View>
                            )}
                          </View>

                          <View className="flex-1">
                            <Text
                              className={`text-xs ${isLast || isFirst
                                ? 'font-extrabold text-gray-900'
                                : 'font-bold text-gray-700'
                                }`}
                              numberOfLines={1}
                            >
                              {step.name}
                            </Text>

                            {step.corridorBadge && (
                              <View className="mt-1 self-start rounded-md bg-[#b33928] px-2 py-0.5">
                                <Text className="text-[9px] font-bold text-white">
                                  {step.corridorBadge}
                                </Text>
                              </View>
                            )}

                            {step.badgeLabel && !step.corridorBadge && (
                              <View className="mt-1 self-start rounded-md bg-amber-500 px-2 py-0.5">
                                <Text className="text-[9px] font-bold text-white">
                                  {step.badgeLabel}
                                </Text>
                              </View>
                            )}
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View
        className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4 border-t border-gray-100"
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: -4 },
          elevation: 10,
        }}
      >
        <SafeAreaView edges={['bottom']}>
          <View className="flex-row items-center justify-between gap-4">
            <View>
              <Text className="text-[11px] font-semibold text-gray-400">
                Tarif BRT Trans Semarang
              </Text>
              <Text className="text-xl font-extrabold text-[#b33928]">
                {formatRupiah(selectedRoute?.price || 3500)}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setIsConfirmModalVisible(true)}
              activeOpacity={0.8}
              className="flex-1 items-center justify-center rounded-xl bg-[#b33928] py-3.5 shadow-sm active:bg-[#9a2f20]"
            >
              <Text className="text-sm font-bold text-white">
                Gunakan Rute Ini
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      <Modal
        visible={isConfirmModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsConfirmModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/50 px-5">
          <View className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            {isTripStarted ? (
              <View className="items-center">
                <View className="h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckIcon size={32} color="#059669" />
                </View>
                <Text className="mt-4 text-center text-lg font-extrabold text-gray-900">
                  Perjalanan Dimulai!
                </Text>
                <Text className="mt-1 text-center text-xs text-gray-500">
                  Selamat menikmati perjalanan menuju {destination}. Silakan menuju halte awal.
                </Text>

                <View className="mt-4 w-full rounded-2xl bg-gray-50 p-3.5">
                  <Text className="text-xs font-semibold text-gray-500">
                    Halte Pertama:
                  </Text>
                  <Text className="text-sm font-bold text-gray-900">
                    {selectedRoute?.steps[0]?.name}
                  </Text>
                  <Text className="mt-1 text-[11px] text-[#b33928]">
                    {selectedRoute?.steps[0]?.corridorBadge}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIsConfirmModalVisible(false);
                    setIsTripStarted(false);
                    router.push('/(tabs)');
                  }}
                  activeOpacity={0.8}
                  className="mt-5 w-full items-center justify-center rounded-xl bg-[#b33928] py-3.5"
                >
                  <Text className="text-sm font-bold text-white">
                    Kembali ke Beranda
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text className="text-base font-extrabold text-gray-900">
                  Konfirmasi Rute & Pembayaran
                </Text>
                <Text className="mt-1 text-xs text-gray-500">
                  Detail rute yang Anda pilih ke halte tujuan
                </Text>

                <View className="mt-4 rounded-2xl bg-gray-50 p-4 border border-gray-100">
                  <View className="flex-row justify-between">
                    <Text className="text-xs text-gray-500">Tujuan</Text>
                    <Text
                      className="text-xs font-bold text-gray-900"
                      numberOfLines={1}
                    >
                      {destination}
                    </Text>
                  </View>

                  <View className="my-2 h-[1px] bg-gray-200" />

                  <View className="flex-row justify-between">
                    <Text className="text-xs text-gray-500">Tarif Tiket</Text>
                    <Text className="text-xs font-bold text-[#b33928]">
                      {formatRupiah(selectedRoute?.price || 3500)}
                    </Text>
                  </View>

                  <View className="mt-1 flex-row justify-between">
                    <Text className="text-xs text-gray-500">Saldo Anda</Text>
                    <Text className="text-xs font-bold text-gray-700">
                      {formatRupiah(currentUser.balance)}
                    </Text>
                  </View>

                  <View className="mt-1 flex-row justify-between">
                    <Text className="text-xs text-gray-500">Sisa Saldo</Text>
                    <Text className="text-xs font-bold text-emerald-600">
                      {formatRupiah(currentUser.balance - (selectedRoute?.price || 3500))}
                    </Text>
                  </View>
                </View>

                <View className="mt-3 rounded-2xl bg-red-50/50 p-3.5 border border-red-100">
                  <Text className="text-[11px] font-bold text-[#b33928]">
                    Daftar Halte Rute Ini:
                  </Text>
                  <View className="mt-1.5 gap-1">
                    {selectedRoute?.steps.map((st, i) => (
                      <Text
                        key={st.id}
                        className="text-xs font-medium text-gray-700"
                      >
                        {i + 1}. {st.name}{' '}
                        {st.corridorBadge ? `(${st.corridorBadge})` : ''}
                      </Text>
                    ))}
                  </View>
                </View>

                <View className="mt-5 flex-row gap-3">
                  <TouchableOpacity
                    onPress={() => setIsConfirmModalVisible(false)}
                    activeOpacity={0.7}
                    className="flex-1 items-center justify-center rounded-xl bg-gray-100 py-3.5"
                  >
                    <Text className="text-xs font-bold text-gray-600">
                      Batal
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleStartTrip}
                    activeOpacity={0.8}
                    className="flex-1 items-center justify-center rounded-xl bg-[#b33928] py-3.5"
                  >
                    <Text className="text-xs font-bold text-white">
                      Mulai Rute
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
