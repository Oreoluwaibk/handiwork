import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function NotificationCard({notification}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "flex-end", gap: 10, paddingBottom: 10}}>
        <View>
            <Image source={{uri: notification.image}} alt={notification.name} style={{borderRadius: 100, height: 40, width: 40}} />
        </View>

        <View style={{gap: 10}}>
            <Text style={{fontWeight: "500", fontSize: 18}}>{notification.name}</Text>
            <Text style={{color: "#ADADAD"}}>{notification.notification}</Text>
        </View>
        
      </View>

      <View style={styles.footer}>
        <Text style={{color: "#ADADAD", fontSize:14}}>{notification.date}</Text>
        <Pressable>
        <Text style={{color: Colors.light.primary, fontSize:16}}>View profile</Text>
        </Pressable>    
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        backgroundColor: "#fff",
        height: 150,
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 7
    },
    footer: {
        borderTopWidth: 0.5,
        borderTopColor: "#E3E3E3",
        paddingVertical: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})