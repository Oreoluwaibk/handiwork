import { View, StyleSheet, Image, Dimensions, Pressable, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '@/constants/Colors'
import Button from '@/components/Button';
import Carousel from 'react-native-reanimated-carousel';
import { useRouter } from 'expo-router';
import { Text } from '@/components/CustomText';


const { width, height } = Dimensions.get("screen");
export default function getStarted() {
  const router = useRouter()

  const data = [
    { title: 'Find Help Easily', desctiption:"Find help and get in touch with the best handy person around your location"},
    { title: 'Earn Money Daily', desctiption:"Earn more than 5000 naira daily while rendering help to various clients"},
    { title: 'Easy Connection', desctiption:"Our connection is easy and seamless with verified users."},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", paddingHorizontal: 30}}>
        <Pressable>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.top}>
        <Image source={require("@/assets/images/getstart.png")} width={width} style={{height: 400, width: width*0.8}} /> 
        <Carousel
          loop
          width={width * 0.9}
          height={100}
          autoPlay={true}
          data={data}
          vertical={true} 
          scrollAnimationDuration={3000}
          renderItem={({ item, index }) => (
            <View style={{display: "flex", alignItems: "center", justifyContent: "center", gap:8}} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.desctiption}</Text>
            </View>
          )}
          
        />
      </View>

      <View style={styles.btn}>
        <Button 
          title="Get Started"
          onPress={() => router.push("/login")}
        />
      </View>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 40
  },
  skip: {
    color: Colors.light.description,
    fontSize: 14
  },
  carouselWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    gap:20,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "800"
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: Colors.light.description,
    paddingHorizontal: 20
  },
  btn: {
    paddingVertical: 40,
    backgroundColor: "#F5F3F2",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50
  }
})