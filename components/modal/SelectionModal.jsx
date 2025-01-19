import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import CheckBox from 'expo-checkbox';

const SelectionModal = ({
    open,
    onCancel,
    title,
    loading,
    data,
    isMultipleSelect,
    onSelect,
    value
}) => {
    const [ searchItem, setSearchItem ] = useState([]);
    const [ searchvalue, setSearchValue ] = useState("");
  return (
    <Modal
        open={open}
        onRequestClose={onCancel}
        animationType="slide"
        presentationStyle="fullScreen"
    >
        <View style={styles.container}>
            <View style={{...styles.heading}}>
                <Text style={styles.header}>{title}</Text>    

                <TouchableOpacity onPress={onCancel}>
                    <MaterialIcons name="close" color="#000" size={24}/>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, marginTop: 10}}>
                {loading ? 
                <View style={styles.flexJust}> 
                    <ActivityIndicator color={Colors.light.primary} size="large" /> 
                </View> :
                (<FlatList 
                    data={searchvalue.length > 0 ? searchItem : data}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() => {
                                onSelect(item.id);
                                // onCancel()
                            }}
                            // onLongPress={handleLongPress}
                        >
                            <View style={styles.itemView}>
                                <View style={styles.circle}>
                                    <CheckBox
                                        value={value && value.includes(item.id)}
                                        // onValueChange={(newValue) =>{onValueChange(newValue)}}
                                        color={value && value.includes(item.id) ? Colors.light.primary : undefined}
                                        style={styles.checkbox}
                                    />
                                </View>
                                <Text style={styles.item}>{item.name || item.title}</Text>   
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />)}
            </View>
        </View>
    </Modal>
  )
}

export default SelectionModal;

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        paddingTop: 30
    },
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    checkbox: {
        color: Colors.light.description,
        borderRadius: 5, height: 15, width: 15, borderWidth: 1
    },
    header: {
        fontSize: 18,
        fontWeight: "700",
        // textAlign: 'center',
        width: "90%",
        lineHeight: 21.09,
    },
    itemView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 10,
    },
    flexJust: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    item: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 20,
        color: Colors.light.description,
    },
    circle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})