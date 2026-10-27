import { Text, TouchableOpacity } from 'react-native';

interface primaryButtonProps {
  title: string;
  onPress?: () => void;
}

export default function primaryButton({ title, onPress }: primaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full py-3.5 bg-[#b33928] active:bg-[#9a2f20] rounded-xl shadow-sm items-center justify-center"
      activeOpacity={0.8}
    >
      <Text className="text-white text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}