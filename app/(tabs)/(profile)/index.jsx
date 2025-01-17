import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '@/components/Homeheaders';
import SuccesssModal from '@/components/SuccesssModal';
import Button from '@/components/Button';
import Profileinput from '@/components/Profileinput';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import ActionIcons from '@/components/ActionIcons';
import NotificationModal from '@/components/modal/NotificationModal';
import { useRouter } from 'expo-router';
import DrawUpModal from '@/components/modal/DrawUpModal';

const ProfileScreen = () => {
  const router = useRouter();
    const [ openModal, setOpenModal ] = useState(false);
    const [ isVendor, setIsVendor ] = useState(false);
    const [ isEditProfile, setIsEditProfile ] = useState(true);
    const [ openNotify, setOpenNotify ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState("Profile save successfully");
    const [ showDrawUp, setShowDrawUp ] = useState(false);
   return (
     <>
       <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
       <ScrollView style={{flex:1,backgroundColor:"#fff"}} showsVerticalScrollIndicator={false}>
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
             <Text style={styles.text}>{!isVendor ? "Become a Vendor" : "Switch to User"}</Text>
           </Pressable>
         </View>
 
         <View style={styles.contain}>
           <View style={{display: "flex", alignItems: "center", marginTop: 20, position:"relative"}}>
             <Image 
               source={require("@/assets/images/img1.png")}
               style={{width: 100, height: 100, borderRadius: 100}}
             />
             <View style={styles.icondiv}>
               <EvilIcons name='camera' color={Colors.light.primary} size={24} />
             </View>
             
           </View>
           <View style={{alignItems: "center"}}>
               <Text style={{color:"#000", fontSize:14, fontWeight: "500"}}>Akhigbe Imoukhuede</Text>
               {!isEditProfile && <Text style={{color: Colors.light.primary, fontSize:14}}>Imoukhuedeakhigbe@gmail.com</Text>}
             </View>

             {isVendor && <View style={{marginTop: 30, display: "flex", alignItems: "center",}}>
             <Button 
               title="Hire Vendor"
               onPress={() => setShowDrawUp(true)}
             />
           </View>}

           {isVendor && (
            <View style={{display: "flex", flexDirection: "row", gap: 10, justifyContent:"center", marginTop: 10}}>
              <ActionIcons 
                icon={<Ionicons name="chatbubble-outline" color={Colors.light.primary} size={20} />}
                title="Chat"
                onPress={() => router.push("/Chat")}
              />
              <ActionIcons 
                icon={<Ionicons name="call-outline" color={Colors.light.primary} size={20} />}
                title="Call"
                onPress={() => router.push("/Call")}

              />
              <ActionIcons 
                icon={<Image source={require("@/assets/icons/chatr.png")} style={{width: 18, height:18}} alt='Chat' />}
                title="Review"
                onPress={() => router.push("/Review")}
              />
            </View>
           )}

          
           {isVendor && (
            <View style={{...styles.inputView, marginTop: 5}}>
 
              <Profileinput 
               label="Bio"
               multiline
               row={3}
               height={100}
             />

          {isVendor && (
            <View style={{display: "flex", flexDirection: "row", gap: 10, paddingHorizontal: 20,}}>
              <Image source={require("@/assets/icons/imgh.png")} width={"auto"} />
              <Image source={require("@/assets/icons/imgh.png")}  width={"auto"}/>
              <Image source={require("@/assets/icons/imgh.png")}  width={"auto"}/>
            </View>
           )}

 
            <Profileinput 
               label="Edit Account"
               onClick={() => setIsEditProfile(true)}
               red
               isActionBtn
             />
            </View>
           )}

           {!isEditProfile && !isVendor && (
            <View style={styles.inputView}>
            <Profileinput 
               label="House 124 Efab Estate, Lokogoma Abuja."
             />
 
            <Profileinput 
               label="54689765546899"
             />
 
            <Profileinput 
               label="Apo District"
             />
 
            <Profileinput 
               label="Edit Account"
               onClick={() => setIsEditProfile(true)}
               red
               isActionBtn
             />
 
            <Profileinput 
               label="Delete  Account"
               red
               isActionBtn
               onClick={() => setOpenNotify(true)}
             />
            </View>
           )}
 
           {isEditProfile && <View style={{paddingVertical: 20,display: "flex", gap:10, marginTop: 20}}>
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

<Profileinput 
               label="Add Images of Workdone"
               multiline
               row={3}
               height={100}
             />
           </View>}
 
           {isEditProfile && <View style={{marginTop: 30, display: "flex", alignItems: "center",}}>
             <Button 
               title="Save"
               onPress={() => setOpenModal(true)}
             />
           </View>}
         </View>
        </View>
       </ScrollView>
       </SafeAreaView>
 
       {openModal && (
         <SuccesssModal 
           open={openModal}
           onCancel={() => {
            setIsEditProfile(false);
            setOpenModal(false);
          }}
           title={modalTitle}
         />
       )}

       {openNotify && (
        <NotificationModal 
          open={openNotify}
          onCancel={() => setOpenNotify(false)}
          title="Delete Account"
          action
          desription="Are you sure you want to delete your account"
          onOk={() => {
            setModalTitle("Account Deleted successfully");
            setOpenModal(true);
          }}
        />
       )}

       {showDrawUp && (
        <DrawUpModal 
          open={showDrawUp}
          onCancel={() => setShowDrawUp(false)}
        />
       )}
     </>
    
   )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 20,
    paddingBottom: 30
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
    gap: 10
   },
   icondiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: -20,
    borderRadius:100,
    height: 40,
    width: 40,
    position: "absolute",
    bottom: 0,
    right: 160
   },
   inputView:{
    flex:1,
    paddingVertical: 20,
    display: "flex", 
    gap:10, marginTop: 20,
    backgroundColor:"#fff"
    
   }
})