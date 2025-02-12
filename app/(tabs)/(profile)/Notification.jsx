import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import Homeheaders from '@/components/Homeheaders';
import NotificationCard from '@/components/card/NotificationCard';
import NotificationModal from '@/components/modal/NotificationModal';
import { getnotification } from '@/api';

export default function Notification() {
    const [ allNotifications, setAllNotificatins ] = useState([
        {id:1, name: "Damian", notification: "Solomon Imoukhuede - ID. 254658660 - Diamond Bank, Savings Account has sent 1million naira to hes wallet.", date: "Nov 20, 2024 02:00pm", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {id:2, name: "Damian", notification: "Solomon Imoukhuede - ID. 254658660 - Diamond Bank, Savings Account has sent 1million naira to hes wallet.", date: "Nov 20, 2024 02:00pm", image: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]);
    const [ loading, setLoading ] = useState(false);
    const [ openNotify, setOpenNotify ] = useState(false);
    const [ notification, setNotification ] = useState(null);

    useEffect(() => {
        handleGetNotification();
    }, []);

    const handleGetNotification = () => {
        setLoading(true);
        getnotification()
        .then(res => {
            if(res.status === 200) {
                setLoading(false);
                setAllNotificatins(res.data.notifications);
            }
        })
        .catch(err => {
            setLoading(false);
            setNotification({
                title: "Unable to get notifications",
                description: err?.response?.data?.message || `${err.message}`
            });
            setOpenNotify(true);
        })
    }
  return (
     <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Homeheaders 
                    title="Notification"
                    showBackBtn
                />
            </View> 

            <View style={{paddingHorizontal: 10}}>
                {loading && <ActivityIndicator color={Colors.light.primary} size="small" />}
                {!loading && <FlatList 
                    data={allNotifications}
                    renderItem={({ item }) => (
                        <View>
                            <NotificationCard 
                                notification={item} 
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />}
            </View>
        </View>

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#f3f3f3",
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
  backgroundColor: "#fff",
  marginBottom: 20
  // paddingHorizontal: 20
 }
});