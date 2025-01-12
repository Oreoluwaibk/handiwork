import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const BackButton = ({ color = "#000", onPress, size = 24}) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name="arrow-back-ios" size={size} style={{fontWeight: "800", width: 40}} color={color} />
    </Pressable>
  )
}

export default BackButton