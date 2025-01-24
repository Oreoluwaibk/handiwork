import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Homeheaders from '@/components/Homeheaders'
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button from '@/components/Button';
import CheckboxComp from '@/components/inputs/CheckboxComp';

export default function Services() {
    const router = useRouter();
    const { title, id } = useLocalSearchParams();
    const [ selectedSkill, setSelectedSkills ] = useState(null);
    
    const skills = ["Event Planners", "Tailors", "Shoe Makers", "Fabric Sellers", "Photographer", "Errand Personel", "Proposal Writing"]
    const skill2 = ["Electricians", "Plumbers", "Welders", "Carpenters", "Masons", "Mechanics", "HVAC Technicians", "Metal Fabricators", "Laundry personnel","Painters"]
    const skill3 = ["Barbers", "Hair Stylist", "Make-up Artists", "Nail Technicians", "Estheticians", "Massage Therapist", "Tattoo Artists", 
"Make-up Kit Sellers"]
const skill4 = [
  "Daily House Cleaners",
  "Laundry Personnel",
  "Janitors",
  "Commercial Cleaners",
  "Gardening Services",
  "Pest Control Technicians",
  "Window Cleaners",
  "Waste Management Workers"
]

const skill5 = [
  "Construction Workers",
  "Site Supervisor",
  "Heavy Equipment Operators",
  "Roofers",
  "Interior Designers",
  "Landscapers"
]

const skill6 = [
  "Chefs",
  "Caterers",
  "Bakers",
  "Food Delivery Worker",
  "Bartenders"
]

const skill7 = [
  "Truck Drivers",
"Delivery personnel",
  "Daily Car Drivers",
 "ForkLift Operators",
 "Warehouse Workers"
]

const skill8 = [
  "Painters",
  "Appliance Repair Technicians",
  "General Handyman",
  "Daily House Cleaners"
]

const skill9 = [
  "Security Guards",
"Body Guards",
"Private Investigator"
]

const allSkills = [
  skills,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9
]


    const handleSelectSkill = (value) => {
        if(selectedSkill === value) return setSelectedSkills(null);
        setSelectedSkills(value);
    }
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Homeheaders 
              title={title}
              showNotifciationIcon
              showBackBtn
            />
          </View>
          {/* <ScrollView style={{backgroundColor: "#fff", flex: 1}}> */}
           <View style={styles.contain}>
                <FlatList 
                    data={allSkills[id-1]}
                    renderItem={({ item }) => {
                        return (
                            <View style={{marginVertical: 5}}>
                                <Pressable onPress={() => handleSelectSkill(item)}>
                                    <CheckboxComp 
                                      title={item}
                                      value={selectedSkill === item}
                                      onValueChange={() => setSelectedSkills(item)}
                                    />
                                </Pressable> 
                               
                            </View>
                        )
                    }}
                    keyExtractor={(item => item)}
                />
           </View>
        
            <View style={{paddingBottom: 200, paddingHorizontal: 10}}>
                <Button title="Search" onPress={() => router.navigate("/vendorNearby")} />
            </View>
           
          {/* </ScrollView> */}
        </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.light.background,
  paddingTop: 20,
  paddingHorizontal: 10
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
  // paddingHorizontal: 20
 }
});