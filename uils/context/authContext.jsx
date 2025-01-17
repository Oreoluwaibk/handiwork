import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
// import storage from "../utils/helpers/storageAsync";
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from "../storage/asyncStorage";
// import WarningModal from "../components/community/notification/WorningModal";
// import * as Location from 'expo-location';

export const AuthContext = createContext({
    token: null,
    user: {
        id: 0,
        full_name: null,
        email: null,
        is_kyc_verified: false,
        email_verified: false
    },
    isLoggedIn: false
});

export const AuthProvider = ({children}) => {
    // const navigation = useNavigation();
    const [user, setUser] = useState({
      id: 0,
      fullname: null,
      email: null,
      is_kyc_verified: false,
      email_verified: false,
      is_active: false,
      is_staff: false,
      is_superuser: false,
      is_vendor: false,
      is_vendor_verified: false,
      date_joined: null,
      last_login: null
    });
    const [lastActivityTime, setLastActivityTime] = useState(Date.now());
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ openWarnModal, setOpenWarnModal ] = useState(false);
    const [ warning, setWarning ] = useState(null);
    const [ deviceToken, setDeviceToken ] = useState(null);
    const [channels, setChannels] = useState([]);
    const [notification, setNotification] = useState(null);
    const notificationListener = useRef();
    const responseListener = useRef();

   
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  

    useEffect(() => {
      const checkActivity = async () => {
        const lastActivity = await AsyncStorage.getItem('lastActivityTime');
        
        if (lastActivity && isLoggedIn && Date.now() - parseInt(lastActivity) > 5 * 60 * 1000) {
          setWarning({content: "Oops! Your session has expired, kindly login to continue", title: "Your Session has expired!"});
          setOpenWarnModal(true);
          logUserOut();
        }
      };
  
      const interval = setInterval(checkActivity, 5 * 60 * 1000); // Check every minute
      return () => clearInterval(interval);
    }, [isLoggedIn]);

    const logUserIn = (data)=>{
        // console.log("logining data", data);//"Content-Type": "application/x-www-form-urlencoded", Accept: "application/json"
        // setToken(data.token);
        // axios.defaults.headers.common['Authorization'] = `Token ${data.token}`;
        // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
        // axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*"
// : *
        // axios.defaults.headers.common["Accept"] = "application/json"
        setUser(data)
        setIsLoggedIn(true);

        // setLastActivityTime(Date.now());

        // storage.save({
        //     key: 'handiworkUserDetails', // Note: Do not use underscore("_") in key!
        //     data: data,
          
        //     // if expires not specified, the defaultExpires will be applied instead.
        //     // if set to null, then it will never expire.
        //     expires: 1000 * 3600,
        //     // expires: null
        // });


        // localStorage.setItem("commutor_user_datails", JSON.stringify(data));
    }

    const logUserOut = ()=>{
      setToken(null);
      setIsLoggedIn(false);
      setUser({
        id: 0,
        fullname: null,
        email: null,
        is_kyc_verified: false,
        email_verified: false,
        is_active: false,
        is_staff: false,
        is_superuser: false,
        is_vendor: false,
        is_vendor_verified: false,
        date_joined: null,
        last_login: null
      })

      storage.remove({
          key: 'handiworkUserDetails'
      });
    }

    useEffect(() => {
    //   storage
    //   .load({
    //       key: 'handiworkUserDetails',

    //       // autoSync (default: true) means if data is not found or has expired,
    //       // then invoke the corresponding sync method
    //       autoSync: true,

    //       // syncInBackground (default: true) means if data expired,
    //       // return the outdated data first while invoking the sync method.
    //       // If syncInBackground is set to false, and there is expired data,
    //       // it will wait for the new data and return only after the sync completed.
    //       // (This, of course, is slower)
    //       syncInBackground: true,

    //       // you can pass extra params to the sync method
    //       // see sync example below
    //       syncParams: {
    //       extraFetchOptions: {
    //           // blahblah
    //       },
    //       someFlag: true
    //       }
    //   })
    //   .then(data => {
    //     const isUserPersist = data;
    //     if(isUserPersist){
    //         logUserIn(isUserPersist)
    //     }
    //   })
    //   .catch(err => {
    //     // any exception including data not found
    //     // goes to catch()
    //     // console.log(err.message);
    //     switch (err.name) {
    //     case 'NotFoundError':
    //       setToken(null);
    //       setIsLoggedIn(false);
    //       // TODO;
    //       break;
    //     case 'ExpiredError':
    //       setToken(null);
    //       setIsLoggedIn(false);
    //       // TODO
    //       break;
    //     }
    //   });
    }, []);
    
    return ( 
        <>
        <AuthContext.Provider 
            value={{
                user,
                token,
                isLoggedIn,
                logUserIn,
                logUserOut,
                setUser,
                setLastActivityTime,
                deviceToken, 
            }}
        >
            {children}
        </AuthContext.Provider>
        {/* {openWarnModal && (
                <WarningModal 
                    open={openWarnModal}
                    onCancel={() =>{
                        setOpenWarnModal(false);
                    }}
                    okname="Continue"
                    onOk={() => {
                        setOpenWarnModal(false);
                    }}
                    ok
                    notification={warning}
                />
        )} */}
        </>
    );
}
 
// export default AuthProvider;
