import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputField';
import PrimaryButton from '../components/primaryButton';
import { BusIcon, CheckBadgeIcon } from '../components/Icons';
import { useAuth } from '../context/AuthContext';

type Mode = 'login' | 'register';

export default function AuthScreen() {
  const { login } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [success, setSuccess] = useState('');

  const isLogin = mode === 'login';

  const switchMode = (next: Mode) => {
    setMode(next);
    setErrors({});
    setSuccess('');
  };

  const validate = () => {
    const next: { name?: string; email?: string; password?: string } = {};
    if (!isLogin && !name.trim()) {
      next.name = 'Nama lengkap wajib diisi';
    }
    if (!email.trim()) {
      next.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Format email tidak valid';
    }
    if (!password) {
      next.password = 'Password wajib diisi';
    } else if (password.length < 6) {
      next.password = 'Password minimal 6 karakter';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    const displayName = name.trim() || email.split('@')[0] || 'Pedro';
    setSuccess(isLogin ? 'Login berhasil' : 'Registrasi berhasil');
    setTimeout(() => login(displayName), 800);
  };

  return (
    <View className="flex-1 bg-[#b33928]">
      <StatusBar barStyle="light-content" backgroundColor="#b33928" />
      <SafeAreaView className="flex-1">
        <View className="items-center px-8 pt-6 pb-8">
          <View className="h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <BusIcon size={34} color="#ffffff" />
          </View>
        </View>

        <View className="flex-1 rounded-t-[32px] bg-white px-7 pt-7">
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <Text className="text-xl font-extrabold text-gray-900">
              {isLogin ? 'Selamat datang kembali' : 'Buat akun baru'}
            </Text>
            <Text className="mt-1 text-sm text-gray-500">
              {isLogin
                ? 'Masuk untuk melanjutkan perjalanan Anda'
                : 'Daftar untuk mulai naik bersama Sambat'}
            </Text>

            <View className="mt-5 flex-row rounded-xl bg-gray-100 p-1">
              <TouchableOpacity
                onPress={() => switchMode('login')}
                activeOpacity={0.8}
                className={`flex-1 items-center rounded-lg py-2 ${isLogin ? 'bg-white' : ''}`}
              >
                <Text className={`text-sm font-semibold ${isLogin ? 'text-[#b33928]' : 'text-gray-500'}`}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => switchMode('register')}
                activeOpacity={0.8}
                className={`flex-1 items-center rounded-lg py-2 ${!isLogin ? 'bg-white' : ''}`}
              >
                <Text className={`text-sm font-semibold ${!isLogin ? 'text-[#b33928]' : 'text-gray-500'}`}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-6">
              {!isLogin && (
                <InputField
                  label="Nama Lengkap"
                  placeholder="Pedro Santoso"
                  value={name}
                  onChangeText={(text) => {
                    setName(text);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  error={errors.name}
                />
              )}

              <InputField
                label="Email"
                placeholder="nama@email.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />

              <InputField
                label="Password"
                placeholder="Kata sandi"
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

              {success ? (
                <View className="mb-3 flex-row items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2">
                  <CheckBadgeIcon size={16} color="#16a34a" />
                  <Text className="text-xs font-semibold text-green-600">{success}</Text>
                </View>
              ) : null}

              {isLogin && (
                <View className="mb-4 items-end">
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text className="text-[11px] font-medium text-[#b33928]">Lupa Password?</Text>
                  </TouchableOpacity>
                </View>
              )}

              <PrimaryButton
                title={isLogin ? 'Masuk Sekarang' : 'Daftar Sekarang'}
                onPress={handleSubmit}
              />
            </View>

            <Text className="mt-6 pb-4 text-center text-[11px] text-gray-400">
              Dengan melanjutkan, Anda menyetujui Syarat dan Kebijakan Privasi
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
