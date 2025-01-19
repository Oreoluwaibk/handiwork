import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import CheckBox from 'expo-checkbox';
import { Colors } from '@/constants/Colors';

const CheckboxComp = ({
    disabled,
    value,
    onValueChange,
    title
}) => {
  return (
    <View style={styles.container}>
    <CheckBox
        disabled={disabled}
        value={value}
        onValueChange={(newValue) =>{onValueChange(newValue)}}
        color={value ? Colors.light.primary : undefined}
        style={styles.checkbox}
        
     />
     <Text style={styles.title}>{title}</Text>
 </View>
  )
}

export default CheckboxComp;

const styles = StyleSheet.create({
    container : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap:10,
        paddingHorizontal:10,
        paddingRight:20
    },
    title: {
        fontSize: 16,
        color: Colors.light.description
    },
    checkbox: {
        color: Colors.light.description,
        borderRadius: 5, height: 15, width: 15, borderWidth: 1
    }
})