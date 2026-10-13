import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  error?: string;
}

export default function InputField({
  label,
  isPassword = false,
  showPassword = false,
  onTogglePassword,
  error,
  ...props
}: InputFieldProps) {
  return (
    <View className="mb-3.5">
      <Text className="text-xs font-medium text-gray-900 mb-1">{label}</Text>
      <View className="relative justify-center">
        <TextInput
          className={`w-full px-3.5 py-2.5 text-xs text-gray-800 bg-white border rounded-xl ${
            error ? 'border-red-600' : 'border-[#EAC5C5] focus:border-red-500'
          }`}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && onTogglePassword && (
          <TouchableOpacity
            onPress={onTogglePassword}
            className="absolute right-3.5"
            activeOpacity={0.7}
          >
            <Text className="text-xs text-red-500 font-medium">
              {showPassword ? 'Sembunyi' : 'Lihat'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <Text className="text-[10px] text-red-600 mt-1">{error}</Text>
      ) : null}
    </View>
  );
}