import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import ImageViewing from 'react-native-image-viewing';
import { Video } from 'expo-av';

export default function ChatDisplay({
  chat
}) {
  const [visible, setVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const videoRef = useRef(null);
  const closeModal = () => setModalVisible(false);

  const handleClicks =() => {
    if(chat.type === "video") return openModal();
    if(chat.type === "image") return setVisible(true);
  }
  return (
    <>
    <Pressable onPress={handleClicks}>
      <View style={styles(chat).container}>
        <View style={styles(chat).contain}>
          {chat.type === "message" && <Text style={styles(chat).message}>{chat.content}</Text>}
          {chat.type === "image" && <Image source={{uri: chat.content}} alt={chat.name} style={{height: 100, width: "100%", borderRadius:5}}/>}

          <View style={styles(chat).datecheck}>
            {chat.location && <Text style={styles(chat).location}>{chat.location}</Text>}
            <Text style={styles(chat).time}>{chat.time}</Text>
            {chat.name === "user" && <Ionicons name="checkmark-done" size={12} color="#fff" />}
          </View>
        </View>
      </View>
    </Pressable>

    <ImageViewing
      images={[{ uri:chat.content }]}
      imageIndex={0}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    />

    <Modal
      visible={isModalVisible}
      animationType="slide"
      onRequestClose={closeModal}
      transparent={true}
    >
      <View style={styles(chat).modalContainer}>
        <Video
          ref={videoRef}
          source={{ uri: chat.content }}
          style={styles(chat).video}
          useNativeControls
          resizeMode="contain"
          isLooping
          onFullscreenUpdate={(status) => {
            if (status.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
              closeModal();
            }
          }}
        />
        <TouchableOpacity onPress={closeModal} style={styles(chat).closeButton}>
          <Text style={styles(chat).closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </>
   
  )
}

const styles = (chat) => StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: chat.name === "user" ?"flex-end": "flex-start"
  },
  contain: {
    backgroundColor: chat.name === "user" ? Colors.light.primary : "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: chat.name === "user" ? 15 : 0,
    borderBottomRightRadius: chat.name === "user" ? 0 : 15,
    padding: 15,
    width: "60%",
    gap: 5,
    paddingRight: 7
  },
  message: {
    color: chat.name === "user" ? "#fff" : "#000",
  },
  datecheck: {
    flexDirection: "row",
    gap: 2,
    justifyContent: chat.location ? "space-between" : "flex-end",
    alignItems: "center"
  },
  time: {
    color: chat.name === "user" ? "#fff" : "##ADADAD",
    fontSize: 10,
  },
  location: {
    color: chat.name === "user" ? "#fff" : "##ADADAD",
    fontSize: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})