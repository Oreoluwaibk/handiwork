import { StyleSheet, View, SafeAreaView, ScrollView, Image } from 'react-native';
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
              // title="Find Vendor Around Your Location."
              title={<Image source={require("@/assets/images/altlogo.png")} alt='logo' />}
              showNotifciationIcon
              // showBackBtn
            />
          </View>
          <ScrollView style={{backgroundColor: "#fff", flex: 1}}>
            <View style={styles.contain}>
                <PictureComp 
                  title="Fashion & Lifestyle" 
                  picture={require("@/assets/images/img1.png")} 
                  onPress={() => router.navigate({
                    pathname: "/service",  
                    params: {
                      title: "Fashion & Lifestyle", 
                      id: 1
                    }})}
                />
                <View style={{display: "flex", flexDirection: "row", gap: 2}}>
                  <PictureComp 
                    title="Skilled Helpers" 
                    picture={require("@/assets/images/img2.png")} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Skilled Helpers", id: 2}})}
                  />

                  <PictureComp 
                    title="Beauty Services" 
                    picture={require("@/assets/images/img3.png")} 
                    width={"90%"}
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Beauty Services", id: 3}})}
                  />
                </View>

                <PictureComp 
                  title="Environmental Cleaning" 
                  picture={require("@/assets/images/img4.png")} 
                  onPress={() => router.navigate({pathname: "/service",  params: {title: "Environmental Cleaning", id: 4}})}
                />
                <PictureComp 
                  title="Maintenance Servies" 
                  picture={require("@/assets/images/img5.png")} 
                  onPress={() => router.navigate({pathname: "/service",  params: {title: "Maintenance Servies", id: 8}})}
                />

                <View style={{display: "flex", flexDirection: "row", gap: 0}}>
                  <PictureComp 
                    title="Construction" 
                    picture={require("@/assets/images/img2.png")} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Construction", id: 5}})}
                  />

                  <PictureComp 
                    title="Catering Services" 
                    picture={require("@/assets/images/img3.png")} 
                    width={"90%"}
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Catering Services", id: 6}})}
                  />
                </View>

                <View style={{display: "flex", flexDirection: "row", gap: -0}}>
                  <PictureComp 
                    title="Transport" 
                    picture={require("@/assets/images/img2.png")} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Transport Services", id: 7}})}
                  />

                  <PictureComp 
                    title="Security Services" 
                    picture={require("@/assets/images/img3.png")} 
                    width={"90%"}
                    onPress={() => router.navigate({pathname: "/service",  params: {title: "Security Services", id: 9}})}
                  />
                </View>
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
  gap: 20,
  paddingBottom: 20,
  paddingTop: 10
 },
 header: {
  paddingVertical: 20,
  // paddingHorizontal: 20
 }
});
