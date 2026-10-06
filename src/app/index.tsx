import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validateForm = (): boolean => {
    let currentErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      currentErrors.username = 'Username tidak boleh kosong';
    } else if (username.length < 4) {
      currentErrors.username = 'Username minimal 4 karakter';
    }

    if (!password) {
      currentErrors.password = 'Password tidak boleh kosong';
    } else if (password.length < 6) {
      currentErrors.password = 'Password minimal 6 karakter';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Login Berhasil', 
        `Username: ${username}\nData berhasil dikumpulkan dan diproses!`
      );
    }, 1500);
  };

  return (
    <View className="flex-1 justify-center px-6 bg-[#F5F5F5]">
      <Text className="text-3xl font-bold text-[#333] mb-2 text-center">
        Selamat Datang
      </Text>
      <Text className="text-sm text-[#666] mb-8 text-center">
        Silakan masukan akun Anda
      </Text>

      <View className="mb-4">
        <Text className="text-sm text-[#333] mb-2 font-medium">Username</Text>
        <TextInput
          className={`bg-white border rounded-lg px-4 py-3 text-base ${
            errors.username ? 'border-[#FF3B30]' : 'border-[#DDD]'
          }`}
          placeholder="Masukkan username (min. 4 karakter)"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            if (errors.username) setErrors({ ...errors, username: undefined });
          }}
          autoCapitalize="none"
        />
        {errors.username && (
          <Text className="text-[#FF3B30] text-xs mt-1">{errors.username}</Text>
        )}
      </View>

      <View className="mb-4">
        <Text className="text-sm text-[#333] mb-2 font-medium">Password</Text>
        <View className="relative justify-center">
          <TextInput
            className={`bg-white border rounded-lg pl-4 pr-24 py-3 text-base ${
              errors.password ? 'border-[#FF3B30]' : 'border-[#DDD]'
            }`}
            placeholder="Masukkan password (min. 8 karakter)"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: undefined });
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            className="absolute right-3 p-2" 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text className="text-[#007AFF] text-xs font-semibold">
              {showPassword ? 'Sembunyikan' : 'Lihat'}
            </Text>
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text className="text-[#FF3B30] text-xs mt-1">{errors.password}</Text>
        )}
      </View>

      <TouchableOpacity 
        className={`py-3.5 rounded-lg items-center mt-4 ${
          isLoading ? 'bg-[#A0A0A0]' : 'bg-[#007AFF]'
        }`}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text className="text-white text-base font-bold">LOGIN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}