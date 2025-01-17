import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '@/components/Homeheaders';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ChatMessage from '@/components/chats/ChatMessage';
import ChatDisplay from '@/components/chats/ChatDisplay';

export default function Chat() {
  const router = useRouter();
  const [ allMessages, setAllMessages ] = useState([
    {id: 1, name: "user", type: "message", time: "06:57 AM", isDelivered: true, content: "Baby i need a new phone, bag and a new shoe  for chrismas"},
    {id: 2, name: "Damain", type: "message", time: "06:57 AM", isDelivered: true, content: "Send your account details"},
    {id: 3, name: "user", type: "message", time: "06:57 AM", isDelivered: true, content: "Baby i need a new phone, bag and a new shoe  for chrismas"},
    {id: 4, name: "Damain", type: "message", time: "06:57 AM", isDelivered: true, content: "Ok let me take a look"},
    {id: 5, name: "Damain", type: "image", time: "06:57 AM", isDelivered: true, content: "https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.webp?b=1&s=612x612&w=0&k=20&c=lbssoUS3vsp4gx5kcuulviFFZmB2isiU3FvTbiUpRm0=", location: "opposite sunnyvale, Abuja."},
    {id: 6, name: "user", type: "image", time: "06:57 AM", isDelivered: true, content: "https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.webp?b=1&s=612x612&w=0&k=20&c=lbssoUS3vsp4gx5kcuulviFFZmB2isiU3FvTbiUpRm0=", location: "opposite sunnyvale, Abuja."},
  ])
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Homeheaders 
            title="Chats"
            showBackBtn
            showIcon={(
              <TouchableOpacity onPress={() => router.push("/Call")}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                  <Ionicons name="call-outline" color={Colors.light.primary} size={16} />
                  <Text>Call</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View> 

        <View style={{flex: 1}}>
          <FlatList 
            data={allMessages}
            renderItem={({ item }) => (
              <View style={{marginVertical: 5}}>
                <ChatDisplay 
                  chat={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.absoluteBtm}>
          <ChatMessage />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#f3f3f3",
   paddingTop: 20,
   position: "relative"
  },
  contain: {
   flex: 1,
   backgroundColor: Colors.light.background,
   marginTop: 20,
   display: "flex",
   gap: 20
  },
  header: {
   paddingVertical: 20,
   backgroundColor: "#fff",
   marginBottom: 20
   // paddingHorizontal: 20
  },
  // absoluteBtm: {
  //   position: "absolute",
  //   bottom: 0
  // }
 });