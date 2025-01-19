import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/lib/store';
import { AuthProvider } from '@/uils/context/authContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isAuthenticated = store.getState().auth.isAuthenticated;
  const [ allowIn, setAllowIn ] =useState(false)
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Monserrat: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    console.log("auththt", isAuthenticated);
    if(isAuthenticated) return setAllowIn(true);
    setAllowIn(false);
  }, [isAuthenticated])

  if (!loaded) {
    return null;
  }

  // if(!allowIn) return (
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
  //       <Stack.Screen name="+not-found" />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack 
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='getStarted' />
          <Stack.Screen name='login' />
          <Stack.Screen name='register' />
          <Stack.Screen name='forgotPassword' />
          <Stack.Screen name='resetPassword' />
          <Stack.Screen name='passwordSet' />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
