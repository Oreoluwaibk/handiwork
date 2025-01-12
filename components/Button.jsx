import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';


const { width } = Dimensions.get("screen");
const Button = ({ title, onPress, color = Colors.light.primary, textColor = "#fff" }) => {
  return (
    <Pressable onPress={onPress} style={{...styles.container, backgroundColor: color}}>
        <Text style={{...styles.text, color: textColor}}>{title}</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width * 0.9,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    fontWeight: "300"
  }
})