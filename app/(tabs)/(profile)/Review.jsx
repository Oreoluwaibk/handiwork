import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Homeheaders from '@/components/Homeheaders';
import ReviewCard from '@/components/card/ReviewCard';
import ChatMessage from '@/components/chats/ChatMessage';

export default function Review() {
  const [ allReviews, setAllReviews ] = useState([
      {id:1, name: "Damian", review: "Commutor is an app that brings individuals with same interest in other to achieve a goal for themselves of the society. It provides the avenue to genuinely fund, start, monitor and complete a project for a certain community, Hence in turn provides job opportunities for vendors in various multiple sectors.", date: "1 Day Ago", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id:2, name: "Damian", review: "Commutor is an app that brings individuals with same interest in other to achieve a goal for themselves of the society. It provides the avenue to genuinely fund, start, monitor and complete a project for a certain community, Hence in turn provides job opportunities for vendors in various multiple sectors.", date: "1 Day Ago", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id:3, name: "Kelechi Origa", review: "Commutor is an app that brings individuals with same interest in other to achieve a goal for themselves of the society. It provides the avenue to genuinely fund, start, monitor and complete a project for a certain community, Hence in turn provides job opportunities for vendors in various multiple sectors.", date: "1 Day Ago", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id:4, name: "Kelechi Origa", review: "Commutor is an app that brings individuals with same interest in other to achieve a goal for themselves of the society. It provides the avenue to genuinely fund, start, monitor and complete a project for a certain community, Hence in turn provides job opportunities for vendors in various multiple sectors.", date: "1 Day Ago", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]);
    const [ loading, setLoading ] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Homeheaders 
            title="Reviews"
            showBackBtn
          />
        </View> 

        <View style={{flex: 1}}>
          <FlatList 
            data={allReviews}
            renderItem={({ item }) => (
                <View>
                  <ReviewCard 
                    review={item}
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