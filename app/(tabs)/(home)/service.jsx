import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Homeheaders from '@/components/Homeheaders'
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button from '@/components/Button';
import CheckboxComp from '@/components/inputs/CheckboxComp';
import NotificationModal from '@/components/modal/NotificationModal';
import { getOneCategories } from '@/api/category';
import { useSearchParams } from 'expo-router/build/hooks';

export default function Services() {
    const router = useRouter();
    const { category } = useLocalSearchParams();
    const [ selectedSkill, setSelectedSkills ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ openNotify, setOpenNotify ] = useState(false);
    const [ notification, setNotification ] = useState(null);
    const [ skills, setSkills ] = useState([]);
    
    useEffect(() => {
      console.log("cc", category, category.title);
      
      // if(category) handleGetCategory(category._id)
    }, [category]);

    const handleGetCategory = (id) => {
      setLoading(true)
      getOneCategories(id)
      .then(res => {
        if(res.status === 200) {
          setLoading(false);
          console.log("res", res.data);
          
        }
      })
      .catch(err => {
        setLoading(false);
        setNotification({
          title: "Unable to get category",
          description: err?.response?.data?.message || `${err.message}`
        });
        setOpenNotify(true);
      })
    }


    const handleSelectSkill = (value) => {
      if(selectedSkill === value) return setSelectedSkills(null);
      setSelectedSkills(value);
    }
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Homeheaders 
              title={category && category.title}
              showNotifciationIcon
              showBackBtn
            />
          </View>
           <View style={styles.contain}>
              <FlatList 
                data={skills}
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
        </View>
     {openNotify && (
      <NotificationModal 
        open={openNotify}
        onCancel={() => setOpenNotify(false)}
        title={notification && notification.title}
        // action
        desription={notification && notification.description}
        onOk={() => {
          setOpenModal(false);
        }}
      />
      )}
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