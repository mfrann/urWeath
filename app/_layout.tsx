import {
  Syne_400Regular,
  Syne_700Bold,
  Syne_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/syne";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Syne_800ExtraBold,
    Syne_400Regular,
    Syne_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="forecast" options={{ headerShown: false }} />
    </Stack>
  );
}
