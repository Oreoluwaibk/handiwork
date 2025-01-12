import { View, Text,  StyleSheet, TextInput, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Feather } from "@expo/vector-icons"

const Profileinput = ({ label, password, showLabel, onChange, value, multiline }) => {
     const [ showText, setShowText ] = useState(false);
  return (
    <View>
    {showLabel && label && <Text style={styles.label}>{label}</Text>}
    <TextInput 
        placeholder={label}
        placeholderTextColor={Colors.light.description}
        style={{...styles.input, height: multiline ? 200 : 56}}
        secureTextEntry={showText}
        onChangeText={onChange}
        value={value}
        multiline={multiline}
        numberOfLines={Platform.OS === "android" && 6}
        rows={7}
    />
    {password && (
        <Pressable style={styles.passwordToggle} onPress={() => setShowText(!showText)}>
            <Feather name={!showText ? "eye-off" :"eye"} size={14} color={Colors.light.description}/>
        </Pressable>
    )}
    </View>
  )
}

export default Profileinput;

const styles = StyleSheet.create({
    container: {

    },
    label: {},
    input: {
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor: "#F5F3F2",
        height: 56,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 5
    },
    passwordToggle:{
        position: "absolute",
        top: 20,
        right: 10,
        zIndex: 10,
    },
})