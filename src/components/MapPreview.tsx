import Svg, { Rect, Path, Circle } from 'react-native-svg';

export default function MapPreview() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
      <Rect width={400} height={180} fill="#eef2f0" />
      <Path d="M0 60h400M0 120h400M120 0v180M280 0v180" stroke="#dbe3df" strokeWidth={10} />
      <Path d="M0 130 C120 90 180 150 400 70" stroke="#c9d6d0" strokeWidth={6} fill="none" />
      <Circle cx={120} cy={60} r={8} fill="#b33928" />
      <Circle cx={280} cy={120} r={8} fill="#b33928" />
      <Circle cx={200} cy={90} r={6} fill="#2faa4a" />
    </Svg>
  );
}
