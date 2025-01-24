import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Homeheaders from '@/components/Homeheaders';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import SuccesssModal from '@/components/SuccesssModal';
import { router } from 'expo-router';

const Tab = () => {
  const [ email, setEmail ] = useState(null);
  const [ title, setTitle ] = useState(null);
  const [ message, setMessage ] = useState(null);
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>
              <Homeheaders 
                title="Support"
                showNotifciationIcon
                showBackBtn
              />
            </View> 

            <View style={{display: "flex", paddingHorizontal: 15, gap: 10, marginTop: 70}}>
              <Authinput 
                label="Email"
                onChange={setEmail}
                value={email}
              />
              <Authinput 
                label="title"
                onChange={setTitle}
                value={title}
              />
              <Authinput 
                label="Message"
                onChange={setMessage}
                value={message}
                multiline={true}
              />

              <View style={{marginTop: 30}}>
                <Button 
                  title="Submit"
                  onPress={() => setOpenModal(true)}
                />
              </View>
          </View>
        </View>
      </SafeAreaView>
      {openModal && (
        <SuccesssModal 
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
            router.push("/(tabs)/(home)")
          }}
          title="Message submitted successfully"
        />
      )}
    </>
  
  )
}

export default Tab;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.light.background,
  paddingTop: 20
 },
 contain: {
  flex: 1,
  backgroundColor: Colors.light.background,
  display: "flex",
  alignItems: "center",
  marginTop: 100
 },
 header: {
  paddingVertical: 20,
  // paddingHorizontal: 20
 }
});