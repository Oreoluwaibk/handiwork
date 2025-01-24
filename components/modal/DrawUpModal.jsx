import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function DrawUpModal({
    open,
    onCancel
}) {
    const router = useRouter();
  return (
    <Modal
        open={open}
        onRequestClose={onCancel}
        transparent={true}
        // presentationStyle="fullScreen"
        animationType="slide"
    >
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={{
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    paddingTop: 20, 
                    paddingBottom: 10,
                    borderBottomWidth: 0.5,
                    borderColor: "#E3E3E3"
                }}>
                    <Text style={{fontSize: 19}}>Hire a Vendor</Text>

                    <TouchableOpacity onPress={onCancel}>
                        <Ionicons name='close' color="#000" size={18} />
                    </TouchableOpacity>
                </View>

                <View style={{paddingVertical: 20, gap: 18}}>
                    <TouchableOpacity onPress={() => {
                        onCancel();
                        router.push("/Chat");
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                            <Ionicons name="chatbubble-outline" color={Colors.light.primary} size={20} />
                            <Text style={{color: "#7D7D7D"}}>Chat</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        onCancel();
                        router.push("/Call");
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                            <Ionicons name="call-outline" color={Colors.light.primary} size={20} />
                            <Text style={{color: "#7D7D7D"}}>Call</Text>
                        </View>
                    </TouchableOpacity>
                  
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    contain: {
        backgroundColor: "#fff",
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20
    }
})