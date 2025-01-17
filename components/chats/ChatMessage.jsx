import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function ChatMessage() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Feather name='plus' color={Colors.light.primary} size={22} />
        </TouchableOpacity>

        <TextInput 
            style={styles.input}
        />

        <TouchableOpacity>
            <Ionicons name='send' color={Colors.light.primary} size={22} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 12,
        backgroundColor: "#fff"
    },
    input: {
        backgroundColor: "rgba(217, 217, 217, 0.3)",
        height: 38,
        width: "83%",
        paddingHorizontal: 10
    }
})