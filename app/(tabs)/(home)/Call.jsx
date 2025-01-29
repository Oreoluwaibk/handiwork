import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function Call() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{color: "#7D7D7D", fontSize: 18}}>Calling</Text>
        <View>
            <Image source={require("@/assets/images/callimg.png")} />
        </View>
        <Pressable onPress={() => router.back()}>
            <View style={styles.round}>
                <Feather name="phone-missed" size={24} color="#fff" />
            </View>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingBottom: 100
    },
    round: {
        height: 73,
        width: 73,
        borderRadius: 100,
        backgroundColor: "#CD2B2B",
        justifyContent: "center",
        alignItems: "center"
    }
})