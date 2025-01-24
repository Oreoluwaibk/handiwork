import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Button from '@/components/Button';
import { AntDesign } from '@expo/vector-icons';
import { Text } from '@/components/CustomText';
import { Colors } from '@/constants/Colors';

const passwordSet = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
       <View style={styles.middle}>
          <Text style={styles.text}>Password set successfully</Text>
          <Image source={require("@/assets/images/suc.png")} />
          <Button 
            title={(
              <Text>
                <AntDesign name="arrowleft" size={24} color="#fff" />
                  Back To Login
                </Text>
            )}
            onPress={() => router.push("/login")}
          />
       </View>
    </View>
  )
}

export default passwordSet;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: Colors.light.background,
      paddingTop: 40,
      paddingHorizontal: 20,
  },
  top: {
      display: "flex",
      flexDirection: "row",
      alignItems:"center",
      gap: 30
  },
  text: {
      fontSize: 18,
      fontWeight: "700"
  },
  middle: {
      display: "flex",
      gap: 30,
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  }
})