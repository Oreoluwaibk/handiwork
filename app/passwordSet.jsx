import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Button from '@/components/Button';
import { AntDesign } from '@expo/vector-icons';

const passwordSet = () => {
    const router = useRouter();
  return (
    <View>
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
      flex: 1
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
      gap: 30
  }
})