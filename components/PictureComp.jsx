import { View, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from './CustomText';

const PictureComp = ({ 
    picture, 
    title,
    width = "100%",
    onPress 
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
         <View style={{...styles.container, width}}>
            <Image source={picture} alt={title} style={{height: 150, width: "!00%"}} />
            <View style={{display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Text style={styles.text}>{title}</Text>
            </View>
           
        </View>
    </TouchableOpacity>
   
  )
}

export default PictureComp;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap:10,
        // alignItems: "center",        
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 14
    }
})