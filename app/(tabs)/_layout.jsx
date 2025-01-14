import { Redirect, Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { AuthContext } from '@/uils/context/authContext';
import { Feather, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const { isLoggedIn } = useContext(AuthContext);

  if(!isLoggedIn) {
    return <Redirect href="/login" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        
        headerShown: false,
        tabBarLabelStyle: {
         fontSize:12
          // paddingVertical: 5
        },
        tabBarStyle: {
          borderTopColor: "red",
          borderColor: "rgba(125, 125, 125, 0.2)",
          borderTopWidth: 5,
          height:70,
          backgroundColor: "#fff"
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather size={20} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color }) => <SimpleLineIcons  size={20} name="earphones-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome6 size={20} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
