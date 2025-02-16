import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'
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
import * as ImagePicker from 'expo-image-picker';
import * as FilePicker from 'expo-document-picker';
import ImageViewing from 'react-native-image-viewing';


const skills = [
  {id:1, title: "Event Planners"},
  {id:2, title: "Tailors"},
  {id:3, title: "Shoe Makers"},
  {id:4, title: "Fabric Sellers"},
  {id:5, title: "Photographer"},
  {id:6, title: "Errand Personal"},
  {id:7, title: "Proposal Writing"},
  {id:8, title: "Electricians"},
  {id:9, title: "Plumbers"},
  {id:10, title: "Welders"},
  {id:11, title: "Carpenters"},
  {id:12, title: "Masons"},
  {id:13, title: "Mechanics"},
  {id:14, title: "HVAC Technicians"},
  {id:15, title: "Laundry personnel"},
  {id:16, title: "Metal Fabricators"},
  {id:17, title: "Painters"},
  {id:18, title: "Barbers"},
  {id:19, title: "Hair Stylist"},
  {id:20, title: "Make-up Artists"},
  {id:21, title: "Nail Technicians"},
  {id:22, title: "Estheticians"},
  {id:23, title: "Massage Therapist"},
  {id:24, title: "Tattoo Artists"},
  {id:25, title: "Make-up Kit Sellers"},
  {id:26, title: "Daily House Cleaners"},
  {id:27, title: "Laundry Personnel"},
  {id:28, title: "Janitors"},
  {id:29, title: "Commercial Cleaners"},
  {id:30, title: "Gardening Services"},
  {id:31, title: "Pest Control Technicians"},
  {id:32, title: "Window Cleaners"},
  {id:33, title: "Waste Management Workers"},
  {id:34, title: "Construction Workers"},
  {id:35, title: "Site Supervisor"},
  {id:36, title: "Heavy Equipment Operators"},
  {id:37, title: "Roofers"},
  {id:38, title: "Interior Designers"},
  {id:39, title: "Landscapers"},
  {id:40, title: "Chefs"},
  {id:41, title: "Caterers"},
  {id:42, title: "Bakers"},
  {id:43, title: "Food Delivery Worker"},
  {id:44, title: "Bartenders"},
  {id:45, title: "Truck Drivers"},
  {id:46, title: "Delivery personnel"},
  {id:47, title: "Daily Car Drivers"},
  {id:48, title: "ForkLift Operators"},
  {id:49, title: "Warehouse Workers"},
  {id:50, title: "Painters"},
  {id:51, title: "Appliance Repair Technicians"},
  {id:52, title: "General Handyman"},
  {id:53, title: "Daily House Cleaners"}
]

const abujaTownsAndCities = [
  { id: 1, name: "Abaji" },
  { id: 2, name: "Asokoro" },
  { id: 3, name: "Bwari" },
  { id: 4, name: "Central Business District" },
  { id: 5, name: "Dawaki" },
  { id: 6, name: "Durumi" },
  { id: 7, name: "Dutse" },
  { id: 8, name: "Garki" },
  { id: 9, name: "Gwarinpa" },
  { id: 10, name: "Jabi" },
  { id: 11, name: "Karu" },
  { id: 12, name: "Kubwa" },
  { id: 13, name: "Kuje" },
  { id: 14, name: "Lugbe" },
  { id: 15, name: "Maitama" },
  { id: 16, name: "Mpape" },
  { id: 17, name: "Nyanya" },
  { id: 18, name: "Utako" },
  { id: 19, name: "Wuse" },
  { id: 20, name: "Wuye" },
];


const ProfileScreen = () => {
  const router = useRouter();
    const [ openModal, setOpenModal ] = useState(false);
    const [ isVendor, setIsVendor ] = useState(false);
    const [ isEditProfile, setIsEditProfile ] = useState(true);
    const [ openNotify, setOpenNotify ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState("Profile save successfully");
    const [ showDrawUp, setShowDrawUp ] = useState(false);
    const [ loading, setLLoading ] = useState(false);
    const [ selectedSkills, setSelectedSkills ] = useState([]);
    const [ selectedAddress, setSelectedAddress ] = useState([]);
    const [ imageFile, setImageFile ] = useState(null);
    const [ image, setImage ] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleSelectSkillsItem = (value) => {
      if(selectedSkills.includes(value)) return setSelectedSkills(prev => prev.filter(item => item !== value));
      setSelectedSkills(prev => [...prev, value]);
    }

    const handleSelectAddress = (value) => {
      setSelectedAddress([value]);
    }

    const handleDisplaySkills = (value, compare) => {
      const presentValue = compare.filter(values => value.some(item => item === values.id));
      let shownSkills = "";
      presentValue.map(value => shownSkills += `${value.title} `);
      return shownSkills;
    }

    const handleDisplayAddress = (value, compare) => {
      const presentValue = compare.filter(values => value.some(item => item === values.id));
      let shownSkills = "";
      presentValue.map(value => shownSkills += `${value.name}`);
      return shownSkills;
    }

    const handleImagePick = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          // mediaTypes: ImagePicker.mediaType.Images,
          mediaTypes: ["images"],
          base64: true
        });
        if(!result) return;
        const info = result.assets[0];
        const mimeType = info.mimeType.split("/")[1];
        const splitName = info.fileName.split(".");
        const file = {
          file: info.base64,
          filename: splitName.length > 1 ? info.fileName : `${info.fileName}.${mimeType}`
        }
        setImageFile(file);
        
        setImage(info.uri);
      } catch (error) {
        console.log("error", error);
      }
     
    }

    const handleFilePick = async () => {
      try {
        let result = await FilePicker.getDocumentAsync();
        // if(!result) return;
        // const info = result.assets[0];
        // const mimeType = info.mimeType.split("/")[1];
        // const splitName = info.fileName.split(".");
        // const file = {
        //   file: info.base64,
        //   filename: splitName.length > 1 ? info.fileName : `${info.fileName}.${mimeType}`
        // }
        // setImageFile(file);
        
        // setImage(info.uri);
      } catch (error) {
        console.log("error", error);
      }
     
    }
   return (
     <>
       <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
       
       <View style={styles.container}>
         <View style={styles.header}>
           <Homeheaders 
             title="Profile Details"
             showNotifciationIcon
             // showBackBtn
           />
         </View> 
 
        
         <ScrollView style={{flex:1,backgroundColor:"#fff"}} showsVerticalScrollIndicator={false}>
       {!isEditProfile &&  <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 15}}>
           <Pressable onPress={() => {
              if(!isVendor) setIsEditProfile(true);
              setIsVendor(!isVendor)
            }}>
             <Text style={styles.text}>{!isVendor ? "Become a Vendor" : "Switch to User profile"}</Text>
           </Pressable>
         </View>}
         <View style={styles.contain}>
           <View style={{display: "flex", alignItems: "center", marginTop: 20, position:"relative"}}>
            <Pressable onPress={() => image && setVisible(true)}>
              <Image 
                source={image ? {uri: image }: require("@/assets/images/img1.png")}
                style={{width: 100, height: 100, borderRadius: 100}}
              />
            </Pressable>
             
             <View style={styles.icondiv}>
              <TouchableOpacity onPress={handleImagePick}>
                <EvilIcons name='camera' color={Colors.light.primary} size={24} />
              </TouchableOpacity>
             </View>
             
           </View>
           <View style={{alignItems: "center"}}>
               <Text style={{color:"#000", fontSize:14, fontWeight: "500"}}>Akhigbe Imoukhuede</Text>
               {!isEditProfile && <Text style={{color: Colors.light.primary, fontSize:14}}>{"Imoukhuedeakhigbe@gmail.com"}</Text>}
               {!isEditProfile && <Text style={{color: Colors.light.primary, fontSize:14}}>{isVendor && selectedSkills.length > 0 && handleDisplaySkills(selectedSkills, skills)}</Text>}
              
             </View>

             {!isVendor &&!isEditProfile && <View style={{marginTop: 30, display: "flex", alignItems: "center",}}>
             <Button 
               title="Hire A Vendor"
               onPress={() => router.navigate("/(tabs)/(home)/vendorNearby")}
             />
           </View>}

           {/* {!isVendor && !isEditProfile && (
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
           )} */}

          
           {isVendor && !isEditProfile && (
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
               number
             />
 
              <Profileinput 
               label="Detailed Address"
             />
 
              <Profileinput 
               label="NIN Number"
               number
             />

              {isVendor && <Profileinput 
               label={selectedSkills.length > 0 ? handleDisplaySkills(selectedSkills, skills) :"Skills"}
               isSelectModal
               listToSelect={skills}
               loading={loading}
               multiple
               onSelect={handleSelectSkillsItem}
               selctedValues={selectedSkills}
             />}
 
              <Profileinput 
               label={selectedAddress.length > 0 ? handleDisplayAddress(selectedAddress, abujaTownsAndCities) : "Address in Abuja"}
               isSelectModal
               onSelect={handleSelectAddress}
               listToSelect={abujaTownsAndCities}
               loading={loading}
               multiple
               selctedValues={selectedAddress}
             />
 
              {isVendor && <Profileinput 
               label="Bio"
              />}


              <TouchableOpacity onPress={handleFilePick}>
                <View style={styles.input}>
                  <Text style={{color: Colors.light.description, fontSize: 16}}>Add Images of Workdone</Text>
                </View>
              </TouchableOpacity>
            
           </View>}
 
           {isEditProfile && <View style={{marginTop: 30, display: "flex", alignItems: "center",}}>
             <Button 
               title="Save"
               onPress={() => setOpenModal(true)}
             />
           </View>}
         </View>
         </ScrollView>
        </View>
      
       </SafeAreaView>
 
       {openModal && (
         <SuccesssModal 
           open={openModal}
           onCancel={() => {
            setOpenNotify(false);
            setOpenModal(false);
            setIsEditProfile(false);
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

    <ImageViewing
      images={[{ uri: image }]}
      imageIndex={0}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    />
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
    marginTop: -15,
    borderRadius:100,
    height: 40,
    width: 40,
    position: "absolute",
    bottom: -10,
    right: 155
   },
   inputView:{
    flex:1,
    paddingVertical: 20,
    display: "flex", 
    gap:10, marginTop: 20,
    backgroundColor:"#fff"
    
   },
   input: {
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor: "#F5F3F2",
    height: 56,
    paddingLeft: 25,
    fontSize: 16,
    borderRadius: 5,
    justifyContent: "center"
},
})