import { View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export default function HeaderDecoration() {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-24">
      <Svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
        <Path
          d="M0 120h400V92c-16-2-20-20-32-20s-10 12-24 12-14-26-28-26-12 22-26 22-16-34-30-34-12 30-26 30-16-18-30-18-12 16-26 16-16-24-30-24-12 20-26 20-16-12-30-12-12 14-26 14V120Z"
          fill="rgba(255,255,255,0.1)"
        />
        <Rect x={150} y={44} width={24} height={48} rx={3} fill="rgba(255,255,255,0.1)" />
        <Path d="M162 32c9 0 12 11 0 11s-9-11 0-11Z" fill="rgba(255,255,255,0.1)" />
        <Rect x={232} y={54} width={14} height={38} rx={2} fill="rgba(255,255,255,0.1)" />
        <Rect x={252} y={48} width={10} height={44} rx={2} fill="rgba(255,255,255,0.1)" />
      </Svg>
    </View>
  );
}
