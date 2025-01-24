import { View, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { AuthContext } from '@/uils/context/authContext';
import { Text } from '@/components/CustomText';
import {
  Form,
  Input,
  Picker,
  Provider,
  Radio,
  Flex as Row,
  Switch,
} from '@ant-design/react-native'

const { width } = Dimensions.get("screen");
const FormItem = Form.Item;
const login = () => {
    const router = useRouter();
    const { logUserIn } = useContext(AuthContext); 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const textRef = useRef();
    // const [form] = Form.useForm();

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
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.light.background,}}>
      <View style={styles.container}>
        <View style={styles.contain}>
              <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                  <Image source={require("@/assets/images/altlogo.png")} />
              </View>
              <View style={{display: "flex", gap: 30, marginTop: 80}}>
                  <View>
                      <Text ref={textRef} style={styles.title}>Login to your Account</Text>
                      <Text ref={textRef} style={styles.description}>To Find Help </Text>
                  </View>

                  <View style={{flexDirection: "column", gap: 10}}>
                      {/* <Form for form={form} layout="vertical" style={{backgroundColor: "#fff", width: "100%", height: "fit-content"}}>
                        <FormItem style={{width: "100%", marginBottom: "30", padding: 0}}> */}
                          <Authinput 
                            label="Email"
                            onChange={setEmail}
                            value={email}
                            type='email-address'
                          />
                        {/* </FormItem> */}

                        {/* <FormItem 
                          name="password" 
                          style={{ flexDirection: "column", gap: 0,padding: 0,margin: 0, height: "fit-content"}}
                          rules={[{required: true, message: "Input your password to continue!"}]}
                          layout="vertical"
                          wrapperStyle={{padding: 0, margin: 0}}
                          // noStyle
                          // validateStatus="warning"
                        > */}
                          <Authinput 
                            label="Password"
                            password
                            onChange={setPassword}
                            value={password}
                            
                          />
                        {/* </FormItem>
                      </Form> */}
                     
                       
                      <View style={{alignItems: "center", flexDirection: "row", justifyContent: "flex-end", marginTop: 10}}>
                        <Link href="/forgotPassword" asChild style={{marginLeft: 7}}>
                        <Text style={{ color: Colors.light.primary }}>Forgot Password</Text>
                        </Link>
                          
                      </View>

                      <View style={{marginTop: 30}}>
                          <Button 
                            title="Login"
                            onPress={handleSunbmitForm}
                          />
                      </View>
                  </View>
              </View>

              <View style={styles.haveView}>
                <Text ref={textRef} style={styles.haveAccount}>Don't have an Account? 
                  <Link href="/register" asChild style={{marginLeft: 7}}>
                    <Text ref={textRef} style={{color: Colors.light.primary}}>Sign up</Text>
                  </Link>
                </Text>
            </View>
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
    paddingTop: 20,
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: "#F5F5F5",
    height: 56,
    paddingLeft: 20,
    fontSize: 16,
    borderRadius: 5
},
  contain: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 100,
    position: "relative"
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
    marginTop:180
    // position: "absolute",
    // bottom: 20
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