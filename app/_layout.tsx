import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
    Orbitron: require('./assets/fonts/Orbitron-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView} className="flex-1 items-center justify-center bg-black">
      {/* Splash screen placeholder */}
    </View>
  );
}


