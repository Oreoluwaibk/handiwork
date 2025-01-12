import { View, Text, Modal, StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from './Button';
import { AntDesign } from '@expo/vector-icons';

const SuccesssModal = ({
    open,
    onCancel,
    title
}) => {
  return (
    <Modal
        open={open}
        onRequestClose={onCancel}
        animationType="slide"
        presentationStyle="fullScreen"
    >
        <View style={styles.container}>
            <View style={styles.middle}>
                <Text style={styles.text}>{title}</Text>
                <Image source={require("@/assets/images/suc.png")} />
                <Button 
                    title={(
                    <Text>
                        <AntDesign name="arrowleft" size={24} color="#fff" style={{marginRight: 2}} />
                        Back To Home
                    </Text>
                    )}
                    onPress={() => onCancel()}
                />
            </View>
        </View>
       
    </Modal>
  )
}

export default SuccesssModal;

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  top: {
      display: "flex",
      flexDirection: "row",
      alignItems:"center",
      gap: 30
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center"
  },
  middle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    flex: 1
  }
})