import { StyleSheet, View, SafeAreaView, ScrollView, Image, Text, ActivityIndicator } from 'react-native';
import Homeheaders from '@/components/Homeheaders';
import { Colors } from '@/constants/Colors';
import PictureComp from '@/components/PictureComp';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { getAllCategories } from "@/api/category"
import NotificationModal from '@/components/modal/NotificationModal';

export default function HomeScreen() {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const [ openNotify, setOpenNotify ] = useState(false);
  const [ notification, setNotification ] = useState(null);
  const [ allCategories, setAllCategories ] = useState([]);
  const [ skilledBueaty, setSkilledBeauty ] = useState([]);
  const [ constructionCat, setConstructionCat ] = useState([]);
  const [ transportSec, setTranportSec ] = useState([]);

  useEffect(() => {
    handleGetAllCategory();
  }, []);

  const handleGetAllCategory = () => {
    setLoading(true);
    getAllCategories()
    .then(res => {
      if(res.status === 200) {
          setLoading(false);
          let skilled = [];
          let contruct = [];
          let transp = [];
          const arrayToRem = ["Security Services","Transport","Construction","Catering Services","Beauty Services","Skilled Helpers"]
          res.data.categories.map(categ => {
            if(categ.title === "Skilled Helpers" || categ.title === "Beauty Services") skilled.push(categ);
            if(categ.title === "Construction" || categ.title === "Catering Services") contruct.push(categ);
            if(categ.title === "Transport" || categ.title === "Security Services") transp.push(categ);
          })
          setAllCategories(res.data.categories.filter(cat => !arrayToRem.includes(cat.title)));
          setSkilledBeauty(skilled);
          setConstructionCat(contruct);
          setTranportSec(transp);
      }
    })
    .catch(err => {
      setLoading(false);
      setNotification({
        title: "Unable to get all category",
        description: err?.response?.data?.message || `${err.message}`
      });
      setOpenNotify(true);
    })
  }

  const images = [
    require("@/assets/images/img1.png"),
    require("@/assets/images/img2.png"),
    require("@/assets/images/img3.png"),
    require("@/assets/images/img4.png"),
    require("@/assets/images/img5.png"),
    require("@/assets/images/img2.png"),
    require("@/assets/images/img3.png"),
    require("@/assets/images/img3.png"),
    require("@/assets/images/img3.png")
  ]
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Homeheaders 
            title={(
              <View style={{gap: 0, alignItems: "flex-start"}}>
                <Image source={require("@/assets/images/altlogo.png")} alt='logo' style={{marginLeft: -10}} />
                <Text style={styles.text}>Find Vendor Around Your Location.</Text>
              </View>
            )}
            showNotifciationIcon
          />
        </View>
        <ScrollView style={{backgroundColor: "#fff", flex: 1}} refreshControl={() => {re}}>
          {loading && <ActivityIndicator color={Colors.light.primary} size="small" />}
          {!loading && <View style={styles.contain}>
            {allCategories.length > 0 && allCategories.splice(0,1).map((category, index) => {
              return (
                <PictureComp 
                  title={category.title} 
                  picture={images[index]} 
                  onPress={() => router.navigate({
                    pathname: "/service",  
                    params: { category: category }})}
                  // onPress={() =>  router.navigate("/service", { category })}
                  key={index}
                />
              )
            })}
            <View style={{display: "flex", flexDirection: "row", gap: 2}}>
              {skilledBueaty.length > 0 && skilledBueaty.map((category, index) => {
                return (
                  <PictureComp 
                    key={index}
                    title={category.title} 
                    picture={images[index+2]} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params:{ category }})}
                  />
                )
              })}
            </View>
            {allCategories.length > 0 && allCategories.splice(1,3).map((category, index) => {
              return (
                <PictureComp 
                  title={category.title} 
                  picture={images[index+1]} 
                  onPress={() => router.navigate({
                    pathname: "/service",  
                    params: { category }})}
                  key={index}
                />
              )
            })}
            <View style={{display: "flex", flexDirection: "row", gap: 2}}>
              {constructionCat.length > 0 && constructionCat.map((category, index) => {
                return (
                  <PictureComp 
                    key={index}
                    title={category.title} 
                    picture={images[index+3]} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params: { category }})}
                  />
                )
              })}
            </View>
            <View style={{display: "flex", flexDirection: "row", gap: 2}}>
              {transportSec.length > 0 && transportSec.map((category, index) => {
                return (
                  <PictureComp 
                    key={index}
                    title={category.title} 
                    picture={images[index+4]} 
                    width={"90%"} 
                    onPress={() => router.navigate({pathname: "/service",  params: { category }})}
                  />
                )
              })}
            </View>
          </View>}
        </ScrollView>
      </View>
     
    {openNotify && (
      <NotificationModal 
        open={openNotify}
        onCancel={() => setOpenNotify(false)}
        title={notification && notification.title}
        desription={notification && notification.description}
        onOk={() => {
          setOpenModal(false);
        }}
      />
      )}
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.light.background,
  paddingTop: 20
 },
 text: {
  fontSize: 22,
  fontWeight: "700",
  width: "100%"
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
