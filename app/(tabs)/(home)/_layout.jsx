import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="service" />
      <Stack.Screen name="vendorNearby" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}