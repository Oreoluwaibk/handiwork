import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const BackButton = ({ color = "#000", onPress, size = 24}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="arrow-back-ios" size={size} style={{fontWeight: "800", width: 40}} color={color} />
    </TouchableOpacity>
  )
}

export default BackButton