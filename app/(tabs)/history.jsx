import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Homeheaders from '@/components/Homeheaders';

const Tab = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Homeheaders 
            title="History"
            showNotifciationIcon
            showBackBtn
          />
          </View> 
      </View>
    </SafeAreaView>
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
  marginTop: 20,
  display: "flex",
  gap: 20
 },
 header: {
  paddingVertical: 20,
  // paddingHorizontal: 20
 }
});
