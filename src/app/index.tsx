import { Redirect } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import AuthScreen from '../screens/AuthScreen';

export default function Index() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Redirect href={'/(tabs)' as never} />;
  }

  return <AuthScreen />;
}
