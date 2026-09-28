import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  // State untuk Collecting Data
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // State untuk UI & Validasi
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  // Fungsi Validasi Form Input
  const validateForm = (): boolean => {
    let currentErrors: { username?: string; password?: string } = {};

    // Validasi Username
    if (!username.trim()) {
      currentErrors.username = 'Username tidak boleh kosong';
    } else if (username.length < 4) {
      currentErrors.username = 'Username minimal 4 karakter';
    }

    // Validasi Password
    if (!password) {
      currentErrors.password = 'Password tidak boleh kosong';
    } else if (password.length < 6) {
      currentErrors.password = 'Password minimal 6 karakter';
    }

    setErrors(currentErrors);

    // Jika objek errors kosong, berarti form valid
    return Object.keys(currentErrors).length === 0;
  };

  // Handler Submit Form
  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulasi proses async / login ke server (1.5 detik)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Login Berhasil', 
        `Username: ${username}\nData berhasil dikumpulkan dan diproses!`
      );
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.subtitle}>Silakan masukan akun Anda</Text>

      {/* Input Username */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[styles.input, errors.username ? styles.inputError : null]}
          placeholder="Masukkan username (min. 4 karakter)"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            if (errors.username) setErrors({ ...errors, username: undefined });
          }}
          autoCapitalize="none"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={[styles.input, styles.passwordInput, errors.password ? styles.inputError : null]}
            placeholder="Masukkan password (min. 6 karakter)"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: undefined });
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            style={styles.toggleButton} 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.toggleText}>{showPassword ? 'Sembunyikan' : 'Lihat'}</Text>
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>

      {/* Tombol Submit */}
      <TouchableOpacity 
        style={[styles.button, isLoading ? styles.buttonDisabled : null]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  passwordInput: {
    paddingRight: 100,
  },
  toggleButton: {
    position: 'absolute',
    right: 12,
    padding: 8,
  },
  toggleText: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});