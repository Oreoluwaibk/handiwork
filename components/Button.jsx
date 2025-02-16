import { View, Text, StyleSheet, Pressable, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';


const { width } = Dimensions.get("screen");
const Button = ({ title, onPress, loading, color = Colors.light.primary, textColor = "#fff", otherWidth= width * 0.9 }) => {
  return (
    <Pressable onPress={onPress} style={{...styles.container, backgroundColor: color,  width: otherWidth}}>
      <View style={{flexDirection: "row", justifyContent: "center", gap: 2}}>
        {loading && <ActivityIndicator color="#fff" size="small" />}
        <Text style={{...styles.text, color: textColor}}>{title}</Text>
      </View>
        
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    fontWeight: "300",
    textAlign:"center"
  }
})