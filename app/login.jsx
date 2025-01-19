import { View, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { AuthContext } from '@/uils/context/authContext';
import { Text } from '@/components/CustomText';

const login = () => {
    const router = useRouter();
    const { logUserIn } = useContext(AuthContext); 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Image source={require("@/assets/images/altlogo.png")} />
                </View>
                <View style={{display: "flex", gap: 30, marginTop: 80}}>
                    <View>
                        <Text style={styles.title}>Login to your Account</Text>
                        <Text style={styles.description}>To Find Help </Text>
                    </View>

                    <View style={{display: "flex", gap: 10}}>
                        <Authinput 
                            label="Email"
                            onChange={setEmail}
                            value={email}
                        />
                         <Authinput 
                            label="Password"
                            password
                            onChange={setPassword}
                            value={password}
                        />
                        <View style={{alignItems: "center", flexDirection: "row", justifyContent: "flex-end"}}>
                          <Link href="/forgotPassword" asChild style={{marginLeft: 7}}>
                          <Text style={{ color: Colors.light.primary }}>Forgot Password</Text>
                          </Link>
                            
                        </View>

                        <View style={{marginTop: 30}}>
                            <Button 
                              title="Login"
                              onPress={() => {
                                logUserIn({email: email, password})
                                router.push("/(tabs)")
                              }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.haveView}>
                <Text style={styles.haveAccount}>Don't have an Account? 
                    <Link href="/register" asChild style={{marginLeft: 7}}>
                        <Text style={{color: Colors.light.primary}}>Sign up</Text>
                    </Link>
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  contain: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 100
    // justifyContent: "center"
  },
  haveAccount: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center"
  },
  haveView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    width: "100%"
  },
  title: {
    fontSize: 16,
    fontWeight: "800"
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    // textAlign: "center",
    color: Colors.light.primary
  },
})