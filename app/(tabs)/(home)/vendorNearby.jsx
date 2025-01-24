import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '@/components/Homeheaders';
import NotificationCard from '@/components/card/NotificationCard';
import { router } from 'expo-router';

export default function VendorNearby() {
    const [ allNotifications, setAllNotificatins ] = useState([
        {id:1, name: "Damian", notification: "Solomon Imoukhuede - ID. 254658660 - Diamond Bank, Savings Account has sent 1million naira to hes wallet.", date: "Nov 20, 2024 02:00pm", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {id:2, name: "Damian", notification: "Solomon Imoukhuede - ID. 254658660 - Diamond Bank, Savings Account has sent 1million naira to hes wallet.", date: "Nov 20, 2024 02:00pm", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]);
  return (
     <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Homeheaders 
                    title="Vendors Nearby"
                    showBackBtn
                />
            </View> 

            <View style={{}}>
                <FlatList 
                    data={allNotifications}
                    renderItem={({ item }) => (
                        <View>
                            <NotificationCard 
                                notification={item} 
                                onPress={() => router.push("/profile")}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#f3f3f3",
  paddingTop: 20,
  paddingHorizontal: 10
 },
 contain: {
  flex: 1,
  backgroundColor: Colors.light.background,
  marginTop: 20,
  display: "flex",
  gap: 20
 },
 header: {
  paddingVertical: 20,
  backgroundColor: "#fff",
  marginBottom: 20
  // paddingHorizontal: 20
 }
});