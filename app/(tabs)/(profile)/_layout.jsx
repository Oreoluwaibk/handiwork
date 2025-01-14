import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Call" />
      <Stack.Screen name="Chat" />
      <Stack.Screen name="Review" />
      <Stack.Screen name="Notification" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}