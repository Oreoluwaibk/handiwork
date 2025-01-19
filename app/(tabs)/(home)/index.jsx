import { Image, StyleSheet, Platform, View, SafeAreaView, ScrollView } from 'react-native';
import Homeheaders from '@/components/Homeheaders';
import { Colors } from '@/constants/Colors';
import PictureComp from '@/components/PictureComp';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
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
                  onPress={() => router.navigate({pathname: "/service",  params: {title: "Fashion & Lifestyle"}})}
                />
                  <View style={{display: "flex", flexDirection: "row", gap: 2}}>
                    <PictureComp 
                      title="Skilled Helpers" 
                      picture={require("@/assets/images/img2.png")} 
                      width={"90%"} 
                      onPress={() => router.navigate({pathname: "/service",  params: {title: "Skilled Helpers"}})}
                    />

                    <PictureComp 
                      title="Beauty Services" 
                      picture={require("@/assets/images/img3.png")} 
                      width={"90%"}
                      onPress={() => router.navigate({pathname: "/service",  params: {title: "Beauty Services"}})}
                    />
                  </View>

                <PictureComp 
                  title="Environmental Cleaning" 
                  picture={require("@/assets/images/img4.png")} 
                  onPress={() => router.navigate({pathname: "/service",  params: {title: "Environmental Cleaning"}})}
                />
                <PictureComp 
                  title="Fashion & Environmental Cleaning" 
                  picture={require("@/assets/images/img5.png")} 
                  onPress={() => router.navigate({pathname: "/service",  params: {title: "Fashion & Environmental Cleaning"}})}
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
