import { View, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import BackButton from '@/components/BackButton';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { Text } from '@/components/CustomText';
import { Colors } from '@/constants/Colors';

const resetPassword = () => {
    const router = useRouter();
    const [ OTP, setOTP ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
       <View style={styles.top}>
           <BackButton onPress={() => router.back()} />

           <Text style={styles.text}>Reset Password</Text>
       </View>
       <View style={styles.middle}>
           <Authinput 
               onChange={setOTP}
               label="OTP"
               value={OTP}
           />
            <Authinput 
               onChange={setNewPassword}
               label="New Password"
               value={newPassword}
           />
            <Authinput 
               onChange={setConfirmPassword}
               label="Confirm New Passsword"
               value={confirmPassword}
           />

           <View style={{marginTop: 30}}>
               <Button 
                   title="Submit"
                   onPress={() => router.push("/passwordSet")}
               />
           </View>
       </View>

   </View>
</SafeAreaView>
  )
}

export default resetPassword;

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
        marginTop: -40
    }
})