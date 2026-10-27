import { ColorValue } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: ColorValue;
}

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

export function HomeIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3 10.5 12 3l9 7.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M9.5 21v-6h5v6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function InfoIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M12 11v5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M12 7.5h.01" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function HistoryIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M6 3v3.5h3.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M12 8v4.5l3 1.8" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function UserIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={8} r={3.6} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function BellIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M10.5 20a2 2 0 0 0 3 0" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function AccessibilityIcon({ size = 24, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={4} r={1.6} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M5 8h14" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M12 7v7" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M12 14 9 21" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M12 14l3 7" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function SearchIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={11} cy={11} r={7} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="m20 20-3.2-3.2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function PinIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Circle cx={12} cy={10} r={2.5} stroke={color} strokeWidth={1.8} fill="none" />
    </Svg>
  );
}

export function BusIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={4} y={4} width={16} height={13} rx={2.5} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M4 11h16" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M7 17v2.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M17 17v2.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function ChevronRightIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="m9 6 6 6-6 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function SwapIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M7 7h11l-3-3" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M17 17H6l3 3" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function WalletIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={3} y={6} width={18} height={12} rx={2.5} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M16 12h2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M3 9h12" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function PlusIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 5v14" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M5 12h14" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function StarIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 3.5 14.6 9l6 .6-4.5 4 1.3 5.9L12 16.8 6.6 19.5l1.3-5.9-4.5-4 6-.6L12 3.5Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function GearIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={3} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M12 2.5v2.5M12 19v2.5M4.5 4.5l1.8 1.8M17.7 17.7l1.8 1.8M2.5 12H5M19 12h2.5M4.5 19.5l1.8-1.8M17.7 6.3l1.8-1.8" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function HelpIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={1.8} fill="none" />
      <Path d="M9.5 9.5a2.5 2.5 0 0 1 4 1.9c0 1.6-2 1.8-2.3 3" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M12 16.5h.01" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function LogoutIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M15 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M16 12H9" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="m13 8 4 4-4 4" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function CheckBadgeIcon({ size = 20, color = '#111827' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 2.5 14 4l2.6-.4 1 2.5 2.4 1.1-.4 2.6L21 12l-1.4 2.1.4 2.6-2.4 1.1-1 2.5L14 20l-2 1.5L10 20l-2.6.4-1-2.5L4 16.8l.4-2.6L3 12l1.4-2.2L4 7.2l2.4-1.1 1-2.5L10 4Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="m8.8 12 2.2 2.2 4.2-4.4" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}
