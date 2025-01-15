import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ActionIcons = ({ icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            {icon}
            <Text style={{fontSize: 14, color:"#7D7D7D"}}>{title}</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default ActionIcons;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#F5F3F2",
        gap: 5,
        alignItems:"center",
        padding: 10,
        paddingHorizontal: 40,
        height:67
    }
})