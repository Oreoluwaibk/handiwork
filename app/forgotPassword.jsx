import { View, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import BackButton from '@/components/BackButton';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { Text } from '@/components/CustomText';

const forgotPassword = () => {
    const router = useRouter();
    const [ email, setEmail ] = useState("");
  return (
     <SafeAreaView style={{flex: 1}}>
         <View style={styles.container}>
            <View style={styles.top}>
                <BackButton onPress={() => router.back()} />

                <Text style={styles.text}>Forgot Password</Text>
            </View>
            <View style={styles.middle}>
                <Authinput 
                    onChange={setEmail}
                    label="Email"
                    value={email}
                />

                <View style={{marginTop: 30}}>
                    <Button 
                        title="Submit"
                        onPress={() => router.push("/resetPassword")}
                    />
                </View>
            </View>

        </View>
     </SafeAreaView>
   
  )
}

export default forgotPassword;

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