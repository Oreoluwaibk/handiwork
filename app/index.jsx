import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext, useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/uils/context/authContext';

const Introduction = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    console.log("is ", isLoggedIn);
    
    setTimeout(() => {
      if(isLoggedIn) return router.push("/(tabs)")
      router.push("/getStarted");
    }, 2000);
  }, [router, isLoggedIn]);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logohand.png")} /> 
    </View>
  )
}

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.light.primary
  }
})