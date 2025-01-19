import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Homeheaders from '@/components/Homeheaders'
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button from '@/components/Button';
import CheckboxComp from '@/components/inputs/CheckboxComp';

export default function Services() {
    const router = useRouter();
    const { title } = useLocalSearchParams();
    const [ selectedSkill, setSelectedSkills ] = useState(null);
    
    const skills = [
        {id:1, title: "Event Planners"},
        {id:2, title: "Tailors"},
        {id:3, title: "Shoe Makers"},
        {id:4, title: "Fabric Sellers"},
        {id:5, title: "Photographer"},
        {id:6, title: "Errand Personal"},
        {id:7, title: "Event Planners"},
        {id:8, title: "Event Planners"},
        {id:9, title: "Event Planners"},
        {id:10, title: "Event Planners"},
    ];

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
                    data={skills}
                    renderItem={({ item }) => {
                        return (
                            <View style={{marginVertical: 5}}>
                                <Pressable onPress={() => handleSelectSkill(item.id)}>
                                    <CheckboxComp 
                                        title={item.title}
                                        value={selectedSkill === item.id}
                                        onValueChange={() => setSelectedSkills(item.id)}
                                    />
                                </Pressable>
                               
                            </View>
                        )
                    }}
                    keyExtractor={(item => item.id)}
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