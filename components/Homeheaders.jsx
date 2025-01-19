import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const { width } = Dimensions.get("screen");
const Homeheaders = ({ 
    title, 
    showBackBtn, 
    showNotifciationIcon,
    showIcon,
    onPress 
}) => {
    const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            {showBackBtn && (
                <BackButton size={14} onPress={() => router.back()}  />
            )}
            <Text style={styles.text}>{title}</Text>
        </View>
       

      {showNotifciationIcon && (
        <Pressable  onPress={() => router.push("/Notification")}>
            <Ionicons name="notifications-outline" size={20} color="black" />
        </Pressable>
      )}

        {showIcon && showIcon}
    </View>
  )
}

export default Homeheaders;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        width: width
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        // gap: 0,
        // width: "50%"
    },
    text: {
        fontSize: 18,
        fontWeight: "700",
        width: "80%"
    },
})