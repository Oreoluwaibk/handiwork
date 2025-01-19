import { View, Text,  StyleSheet, TextInput, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Feather } from "@expo/vector-icons"
import SelectionModal from './modal/SelectionModal';

const Profileinput = ({ 
    label, 
    password, 
    showLabel, 
    onChange, 
    value, 
    multiline, 
    isActionBtn, 
    red, 
    onClick, 
    row=7, 
    height=200,
    number,
    isSelectModal,
    listToSelect,
    onSelect,
    loading,
    multiple,
    selctedValues
}) => {
     const [ showText, setShowText ] = useState(false);
     const [ showModal, setShowModal ] = useState(false);
  return (
    <>
        <Pressable onPress={() => isSelectModal && setShowModal(true)}>
            {showLabel && label && <Text style={styles.label}>{label}</Text>}
            {!isActionBtn && <TextInput 
                placeholder={label}
                placeholderTextColor={Colors.light.description}
                style={{...styles.input, height: multiline ? height : 56}}
                secureTextEntry={showText}
                onChangeText={onChange}
                value={value}
                multiline={multiline}
                numberOfLines={Platform.OS === "android" && 6}
                rows={row}
                editable={!isSelectModal}
                keyboardType={number? "numeric" :"default"}
            />}
            {isActionBtn && (
                <Pressable onPress={onClick}>
                    <View style={{...styles.actbtn, height:56}}>
                        <Text style={{color: red ? Colors.light.primary : Colors.light.description, fontSize:16}}>{label}</Text>
                    </View>
                </Pressable>
            )}
            {password && (
                <Pressable style={styles.passwordToggle} onPress={() => setShowText(!showText)}>
                    <Feather name={!showText ? "eye-off" :"eye"} size={14} color={Colors.light.description}/>
                </Pressable>
            )}
        </Pressable>
        {showModal && (
            <SelectionModal 
                open={showModal}
                onCancel={() => setShowModal(false)}
                title={label}
                loading={loading}
                data={listToSelect}
                isMultipleSelect={multiple}
                handleItemSelect={onSelect}
                onSelect={onSelect}
                value={selctedValues}
            />
        )}
    </>

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
        paddingLeft: 25,
        fontSize: 16,
        borderRadius: 5
    },
    actbtn:{
        borderWidth:1,
        borderColor: "#F5F3F2",
        height: 56,
        paddingLeft: 25,
        fontSize: 16,
        borderRadius: 5,
        justifyContent:"center"
    },
    passwordToggle:{
        position: "absolute",
        top: 20,
        right: 10,
        zIndex: 10,
    },
})