import { Image, StyleSheet, Platform, View, SafeAreaView, ScrollView } from 'react-native';
import Homeheaders from '@/components/Homeheaders';
import { Colors } from '@/constants/Colors';
import PictureComp from '@/components/PictureComp';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Homeheaders 
              title="Find Vendor Around Your Location."
              showNotifciationIcon
              showBackBtn
            />
          </View>
          <ScrollView style={{backgroundColor: "#fff", flex: 1}}>
            <View style={styles.contain}>
                <PictureComp 
                  title="Fashion & Lifestyle" 
                  picture={require("@/assets/images/img1.png")} 
                />
                  <View style={{display: "flex", flexDirection: "row", gap: 2}}>
                    <PictureComp 
                      title="Skilled Helpers" 
                      picture={require("@/assets/images/img2.png")} 
                      width={"90%"} 
                    />

                    <PictureComp 
                      title="Beauty Services" 
                      picture={require("@/assets/images/img3.png")} 
                      width={"90%"}
                    />
                  </View>

                <PictureComp 
                  title="Environmental Cleaning" 
                  picture={require("@/assets/images/img4.png")} 
                />
                <PictureComp 
                  title="Fashion & Environmental Cleaning" 
                  picture={require("@/assets/images/img5.png")} 
                />
            </View>
          </ScrollView>
        </View>
     
    </SafeAreaView>
  
  );
}

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
