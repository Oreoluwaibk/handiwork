import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '@/components/Homeheaders';
import SuccesssModal from '@/components/SuccesssModal';
import Button from '@/components/Button';
import Profileinput from '@/components/Profileinput';

const Tab = () => {
   const [ openModal, setOpenModal ] = useState(false);
   const [ isVendor, setIsVendor ] = useState(false);
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.header}>
          <Homeheaders 
            title="Profile Details"
            showNotifciationIcon
            // showBackBtn
          />
        </View> 

        <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 15}}>
          <Pressable onPress={() => setIsVendor(!isVendor)}>
            <Text style={styles.text}>{isVendor ? "Become a Vendor" : "Switch to User"}</Text>
          </Pressable>
        </View>

        <View style={styles.contain}>
          <View style={{display: "flex", alignItems: "center", marginTop: 20}}>
            <Image 
              source={require("@/assets/images/img1.png")}
              style={{width: 100, height: 100, borderRadius: 100}}
            />
            <View>
              
            </View>
          </View>

          <View style={{paddingVertical: 20,display: "flex", gap:10, marginTop: 20}}>
            <Profileinput 
              label="Full Name"
            />

<Profileinput 
              label="Email"
            />

<Profileinput 
              label="Phone Number"
            />

<Profileinput 
              label="Detailed Address"
            />

<Profileinput 
              label="NIN Number"
            />

<Profileinput 
              label="Address in Abuja"
            />

<Profileinput 
              label="Bio"
            />
          </View>

          <View style={{marginTop: 30, display: "flex", alignItems: "center",}}>
            <Button 
              title="Submit"
              onPress={() => setOpenModal(true)}
            />
          </View>
        </View>
       </View>
        </ScrollView>
      </SafeAreaView>

      {openModal && (
        <SuccesssModal 
          open={openModal}
          onCancel={() => setOpenModal(false)}
          title="Profile save successfully"
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
   header: {
    paddingVertical: 20,
    // paddingHorizontal: 20
   },
   text: {
    color: Colors.light.primary,
    fontSize: 14
   },
   contain: {
    display: "flex",
    gap: 30
   }
})