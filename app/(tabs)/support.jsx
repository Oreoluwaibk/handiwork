import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Homeheaders from '@/components/Homeheaders';
import Authinput from '@/components/Authinput';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import SuccesssModal from '@/components/SuccesssModal';
import { router } from 'expo-router';
import { sendSupport } from '@/api/category';
import { AuthContext } from '@/uils/context/authContext';
import NotificationModal from '@/components/modal/NotificationModal';
import { validateField } from '@/uils/validation/validation';

const Tab = () => {
  const { user } = useContext(AuthContext);
  const [ email, setEmail ] = useState(null);
  const [ title, setTitle ] = useState(null);
  const [ message, setMessage ] = useState(null);
  const [ openModal, setOpenModal ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ openNotify, setOpenNotify ] = useState(false);
  const [ notification, setNotification ] = useState(null);
  const [ titleError, setTitleError ] = useState("");
  const [ messageError, setMessageError ] = useState("");

  useEffect(() => {
    if(user) setEmail(user.email)
  }, [user]);

  const resetField = () => {
    setMessageError("");
    setTitleError("");
  }

  useEffect(() => {
    resetField();
  }, [message, title]);
  
  const handleSendSupport = () => {
    let check = true;
    check = validateField(title, setTitleError);
    if(!check) return;
    check = validateField(message, setMessageError);
    if(!check) return;

    setLoading(true);
    sendSupport({ email, title, message, user_id: user._id})
    .then(res => {
      if(res.status === 200) {
        setLoading(false);
        setOpenModal(true);
        setMessage("");
        setTitle("");
      }
    })
    .catch(err => {
      setLoading(false);
      setNotification({
        title: "Unable to send response",
        description: err?.response?.data?.message || err?.response?.data || `${err.message}`
      });
      setOpenNotify(true);
    })
  }
  return ( 
    <>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>
              <Homeheaders 
                title="Support"
                showNotifciationIcon
                showBackBtn
              />
            </View> 

            <View style={{display: "flex", paddingHorizontal: 15, gap: 10, marginTop: 70}}>
              <Authinput 
                label="Email"
                onChange={setEmail}
                value={email}
                editable={false}
              />
              <Authinput 
                label="title"
                onChange={setTitle}
                value={title}
                error={titleError}
              />
              <Authinput 
                label="Message"
                onChange={setMessage}
                value={message}
                error={messageError}
                multiline={true}
              />

              <View style={{marginTop: 30}}>
                <Button 
                  title="Submit"
                  onPress={handleSendSupport}
                  loading={loading}
                />
              </View>
          </View>
        </View>
      </SafeAreaView>
      {openModal && (
        <SuccesssModal 
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
            router.push("/(tabs)/(home)")
          }}
          title="Message submitted successfully"
        />
      )}
      {openNotify && (
      <NotificationModal 
        open={openNotify}
        onCancel={() => setOpenNotify(false)}
        title={notification && notification.title}
        // action
        desription={notification && notification.description}
        onOk={() => {
          setOpenModal(false);
        }}
      />
      )}
    </>
  
  )
}

export default Tab;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.light.background,
  paddingTop: 20
 },
 contain: {
  flex: 1,
  backgroundColor: Colors.light.background,
  display: "flex",
  alignItems: "center",
  marginTop: 100
 },
 header: {
  paddingVertical: 20,
  // paddingHorizontal: 20
 }
});