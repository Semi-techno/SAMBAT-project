import { Text, TouchableOpacity } from 'react-native';

interface primaryButtonProps {
  title: string;
  onPress?: () => void;
}

export default function primaryButton({ title, onPress }: primaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full py-3 bg-[#93110A] active:bg-[#7D0E08] rounded-xl shadow-sm items-center justify-center"
      activeOpacity={0.8}
    >
      <Text className="text-white text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}