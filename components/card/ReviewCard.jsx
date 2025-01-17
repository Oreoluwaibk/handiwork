import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '../Homeheaders';

export default function ReviewCard({ review }) {
  
  return (
   <View style={styles.container}>
    <View style={styles.topFlex}>
      <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
        <Image source={{uri: review.image}} alt={review.name} style={{borderRadius: 100, height: 40, width: 40}} />
        <Text style={{color: Colors.light.primary, fontSize: 16, fontWeight: "600"}}>{review.name}</Text>
      </View>
      <Text style={{fontSize: 14, fontWeight: "400"}}>{review.date}</Text>
    </View>

    <View>
      <Text style={{color: "#A698A3"}}>{review.review}</Text>
    </View>

    <Pressable>
      <Text  style={{fontSize: 14, fontWeight: "400"}}>Reply</Text>
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: "#fff",
    padding: 20, 
    paddingVertical: 15
  },
  topFlex: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
  }
})