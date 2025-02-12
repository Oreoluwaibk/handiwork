import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Button from '../Button'

const { width } = Dimensions.get("window");
export default function NotificationModal({
    open,
    onCancel,
    title,
    desription,
    action,
    color,
    cancelname="No",
    onOk,
    loading,
    okname="Yes"
}) {
  return (
    <View>
    <Modal
      open={open}
      onRequestClose={onCancel}
      transparent={true}
    >
      <View style={styles.container}>
          <View style={styles.contain}>
              <Text style={{...styles.title, color: "#000"}}>{title  === "" ? "New notification" : title}</Text>
              <Text style={styles.content}>{desription}</Text>

              {!action && <View style={styles.btnView}>
                  <Button style={styles.btn} otherWidth={"50%"} onPress={onCancel} title="close"/>
              </View>}

              {action &&(
                <View style={styles.btnView2}>
                <Button otherWidth={"50%"} onPress={onOk} loading={loading} title={okname} textColor='#000' color='#EDECEC'>{okname}</Button>
                  <Button otherWidth={"50%"} onPress={onCancel} color={color} title={cancelname}>{cancelname}</Button>
              </View>
              )}
          </View>
      </View>
    </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(15, 13, 13, 0.39)",
    },
    contain: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginHorizontal: 30,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: width * 0.8
    },
    btnView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    btnView2: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 15,
      gap:10
    },
    btn: {
        width: "50%",
        // height: 42,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // color: "#000"
    },
    title: {
      color: "#7F007C",
      fontSize: 18,
      lineHeight:20,
      fontWeight: "700",
      marginBottom: 5
    },
    content: {
      color: "#979797",
      fontSize: 14,
      fontWeight: "400"
    }
})