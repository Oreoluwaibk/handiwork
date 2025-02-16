import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { Link, router } from 'expo-router';
import { Text } from '@/components/CustomText';
import { AuthContext } from '@/uils/context/authContext';

const register = () => {
   const { logUserIn } = useContext(AuthContext); 
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSunbmitForm = () => {
      // const { validateFields } = form;
      // validateFields()
      // .then(values => {
      //   console.log("value", values);
      
        logUserIn({email: email, password})
        router.push("/(tabs)")
      // })
    }

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.contain}>
              <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                  <Image source={require("@/assets/images/altlogo.png")} />
              </View>
              <View style={{display: "flex", gap: 30, marginTop: 80}}>
                  <View>
                      <Text style={styles.title}>Sign Up</Text>
                      <Text style={styles.description}>To Find Help</Text>
                  </View>

                  <View style={{display: "flex", gap: 10}}>
                      <Authinput 
                          label="Firstname"
                          onChange={setFirstname}
                          value={firstname}
                      />
                      <Authinput 
                          label="Lastname"
                          onChange={setLastname}
                          value={lastname}
                      />
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
                      {/* <View style={{alignItems: "center", flexDirection: "row", justifyContent: "flex-end"}}>
                          <Text style={{ color: Colors.light.primary }}>Forgot Password</Text>
                      </View> */}

                      <View style={{marginTop: 30}}>
                          <Button 
                              title="Sign Up"
                              onPress={handleSunbmitForm}
                          />
                      </View>
                  </View>
                  
              </View>
              <View style={styles.haveView}>
                <Text style={styles.haveAccount}>Already have an Account? 
                  <Link href="/login" asChild style={{marginLeft: 7}}>
                    <Text style={{color: Colors.light.primary}}>Log in</Text>
                  </Link>
                </Text>
              </View>

          </View>
        
      </View>
    </SafeAreaView>
  )
}

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 20,
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
    width: "100%",
    marginTop: 30
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