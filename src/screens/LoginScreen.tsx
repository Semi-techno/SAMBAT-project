import { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputField';
import PrimaryButton from '../components/primaryButton';
import SocialButton from '../components/socialButton';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Error Validation
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});

  const validateForm = () => {
    let valid = true;
    let newErrors: { identifier?: string; password?: string } = {};

    if (!identifier.trim()) {
      newErrors.identifier = 'Email atau nomor telepon wajib diisi';
      valid = false;
    } else if (
      identifier.includes('@') &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier.trim())
    ) {
      newErrors.identifier = 'Format email tidak valid';
      valid = false;
    }

    // Validasi Password
    if (!password) {
      newErrors.password = 'Password wajib diisi';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password minimal terdiri dari 6 karakter';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      Alert.alert('Sukses', 'Login berhasil!');
      // TODO: Panggil API Login di sini
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-between px-6 py-8">
          // Header & Logo 
          <View className="items-center mt-4">
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYuYk48yhPKcEm8zUZ_Tipmw1wg19KI7blS1eAE_yX-CKy-KrCHyscXWDb3QMlg6CGw5Lj-kEdI7xpxMvAtmLJ2sYHonaxngUjVICjRmDiuAlwcx2Bbal40CNvTream1zNpj-X6EcHljs9bGwA2GV5rCj933ah3I7EqCs24JcQ1SWlt49fbuPNkdr6z9NcPTc9mzvYh6FG6xaq6Gx_ehHKSO_OZ8W3ErLSQOfu5oceusze-yyXPAqpFleMqGsaT6xP2g',
              }}
              style={{ width: 140, height: 60 }}
              resizeMode="contain"
            />
            <Text className="text-base font-semibold text-gray-900 mt-4 mb-1 text-center">
              Sugeng Rawuh Maneh, Lur!
            </Text>
            <Text className="text-xs text-gray-600 text-center max-w-[260px] leading-5">
              Silakan masuk ke akun Anda untuk mulai berkeliling Semarang
            </Text>
          </View>

          // Form Login
          <View className="mt-6 w-full">
            <InputField
              label="Email atau Nomor Telepon"
              placeholder="Contoh: sambat@email.com"
              value={identifier}
              onChangeText={(text) => {
                setIdentifier(text);
                if (errors.identifier) setErrors((prev) => ({ ...prev, identifier: undefined }));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.identifier}
            />

            <InputField
              label="Password"
              placeholder="Kata Sandi"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              isPassword
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              error={errors.password}
            />

            <View className="items-end mb-4">
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-[11px] font-medium text-[#9A130D]">
                  Lupa Password?
                </Text>
              </TouchableOpacity>
            </View>

            <PrimaryButton
              title="Masuk Sekarang"
              onPress={handleLogin}
            />
          </View>

          // Social Login
          <View className="mt-6">
            <View className="relative items-center justify-center my-2">
              <View className="w-full border-t border-gray-200" />
              <View className="absolute bg-white px-2.5">
                <Text className="text-[10px] text-gray-500">
                  Atau masuk dengan
                </Text>
              </View>
            </View>

            <View className="flex-row gap-2.5 mt-4">
              <SocialButton
                type="google"
                title="Google"
                onPress={() => Alert.alert('Google Login', 'Menghubungkan ke Google...')}
              />
              <SocialButton
                type="apple"
                title="Apple"
                onPress={() => Alert.alert('Apple Login', 'Menghubungkan ke Apple...')}
              />
            </View>
          </View>

          // Footer
          <View className="items-center pt-6 pb-2">
            <Text className="text-[11px] text-gray-700">
              Belum punya akun?{' '}
              <Text className="font-bold text-[#9A130D]">Daftar di sini</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}