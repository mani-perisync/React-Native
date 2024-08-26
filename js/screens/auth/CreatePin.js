// import { ScrollView, StatusBar, StyleSheet, Text, View,TextInput } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { borderColor, borderWidth, flex, fontSize, margin, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import { ButtonComponent, TextComponent, TextInputCompnent } from '../../components'
// import { useRoute } from '@react-navigation/native'
// import { useDispatch,useSelector } from 'react-redux'
// import { setUserInfo } from '../../redux/userReducer/userInfo'

// export const CreatePin = ({navigation})=> {
    
//     const route = useRoute()
//     const dispatch = useDispatch()
//     const { userInfo } = useSelector(state => state.user.userInfo)
//     console.log('====================================');
//     console.log("userInfodwewedwe",userInfo);
//     console.log('====================================');


   

//     const [otp, setOtp] = useState(["","","",""])
//     const[isFocus, setIsFocus] = useState(false)
//     const [focusedIndex, setFocusedIndex] = useState(null);

//     console.log("otpppppp",otp);

    

//     const handleFocus = (index) => {
//         setIsFocus(true)
//         setFocusedIndex(index);
//     }
//     const handleBlur = () => {
//         setIsFocus(false)
//         setFocusedIndex(null);
//     }

    

//     const refs = useRef([]);

//     const OtpHandle = (text,index) => {
//         if(index == 3 && text.length !=1){
//             refs.current[index - 1].focus();
//         }
//         if(index == 2 && text.length !=1){
//             refs.current[index - 1].focus();
//         }
//         if(index == 1 && text.length !=1){
//             refs.current[index - 1].focus();
//         }

//         let newOtp = [...otp];
//         newOtp[index] = text;
//         setOtp(newOtp);
//         if(text.length === 1 && index < 3){
//             refs.current[index + 1].focus();
//         }
//     }



//     let Status = Object.values(otp).some(next => next =="")
//     if(!Status){
//         let otpArray = otp.map(str => parseInt(str))
//         console.log(otpArray);
//     }

//     const nextPage = () => {
//         if(!Status){
//             const newUser = route.params
//             console.log('====================================');
//             console.log("hdjshdjdatatatata",newUser);
//             console.log('====================================');

            

//             const allUsers = [...userInfo,newUser];
//             console.log("allusersss",allUsers);
            
//             dispatch(setUserInfo({allUsers}))
//             console.log('====================================');
//             console.log("resultuserinfosucesffullly",userInfo);
//             console.log('====================================');
//             navigation.navigate('AddFingerprint')
//         }
//         else{
//             console.log("errorrrr");
//         }
//     }


//     const goBack = () => {
//         // const data = route.params
//         console.log('====================================');
//         console.log("backdataroot",route.params);
//         console.log('====================================');
//         navigation.navigate('ProfileFill',route.params)
//     }

    
//   return (
//     <ScrollView style={[flex(1),styles.bgWhite]}>
//         <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
//         <View style={[flex(1)]}>
//             <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
//                 <Icon name="arrow-left" onPress={goBack} size={19} style={[styles.black]}/>
//                 <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Create New Pin"}/>
//             </View>

//             <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
//                 <TextComponent style={[styles.textCenter,styles.black_500]} fontWeight={'500'} size={20} title={'Add a PIN number to make your account more secure'}/>
//             </View>


//             <View style={[styles.row,styles.spaceEvenly,{gap:15},marginPosition(0,25,40,25)]}>
//                 {otp.map((value,index) =>(
//                     <TextInput
//                     key={index}
//                     onFocus={handleFocus}
//                     onBlur={handleBlur}
//                     maxLength={1}
//                     style={[styles.textCenter,fontSize(30),radius(10),styles.black,flex(1),borderWidth(2),,{borderColor:focusedIndex === index? "#000000" : "#ffffff",backgroundColor: "#F6F5F2", elevation: 2}]}
//                     secureTextEntry={true}
//                     keyboardType={'numeric'}
//                     value={value}
//                     onChangeText={(text) => OtpHandle(text,index)}
//                     ref={(ref) => (refs.current[index] = ref)}
//                     />
//                 ))}
//             </View>

//             {/* <View style={[styles.row, marginPosition(0, 0, 40, 0), {gap:20}, styles.spaceEvenly]}>
//                 {otp.map((value, index) => (
//                     <TextInput
//                         key={index}
//                         onFocus={handleFocus}
//                         onBlur={handleBlur}
//                         maxLength={1}
//                         style={[fontSize(20), styles.black, flex(1), borderWidth(2),
//                         { borderColor: isFocus ? "#ffffff" : "#F6F5F2", backgroundColor: "#F6F5F2", elevation: 2 }, radius(10), styles.textCenter]}
//                         secureTextEntry={true}
//                         keyboardType="numeric"
//                         value={value}
//                         onChangeText={(text) => handleOtpInputChange(text, index)}
//                         ref={(ref) => (refs.current[index] = ref)}
//                     />

//                 ))}

//             </View> */}



//             {/* <ButtonComponent onPress={nextPage} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack]} title={"Continue"}/> */}

//             <View style={[marginPosition(20,27,30,27)]}>
//                 <ButtonComponent onPress={nextPage} title={"Continue"}/>

//             </View>
//         </View>

//     </ScrollView>
//   )
// }






















import { ScrollView, StatusBar, StyleSheet, Text, View,TextInput, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { borderColor, borderWidth, flex, fontSize, margin, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ButtonComponent, TextComponent, TextInputCompnent } from '../../components'
import { useRoute } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { setUserInfo } from '../../redux/userReducer/userInfo'

export const CreatePin = ({navigation})=> {
    
    const route = useRoute()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.user.userInfo)
    console.log('====================================');
    console.log("userInfodwewedwe",userInfo);
    console.log('====================================');


   

    const [otp, setOtp] = useState(["","","",""])
    const[isFocus, setIsFocus] = useState(false)
    const [focusedIndex, setFocusedIndex] = useState(null);

    console.log("otpppppp",otp);

    

    const handleFocus = (index) => {
        setIsFocus(true)
        setFocusedIndex(index);
    }
    const handleBlur = () => {
        setIsFocus(false)
        setFocusedIndex(null);
    }

    

    const refs = useRef([]);

    const OtpHandle = (text,index) => {
        if(index == 3 && text.length !=1){
            refs.current[index - 1].focus();
        }
        if(index == 2 && text.length !=1){
            refs.current[index - 1].focus();
        }
        if(index == 1 && text.length !=1){
            refs.current[index - 1].focus();
        }

        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        if(text.length === 1 && index < 3){
            refs.current[index + 1].focus();
        }
    }



    let Status = Object.values(otp).some(next => next =="")
    if(!Status){
        let otpArray = otp.map(str => parseInt(str))
        console.log(otpArray);
    }

    const nextPage = () => {
        if(!Status){
            const newUser = route.params
            console.log('====================================');
            console.log("hdjshdjdatatatata",newUser);
            console.log('====================================');

            const userInfoArray = Array.isArray(userInfo)? userInfo : []
            console.log("userInfoArrayuserInfoArrayuserInfoArrayuserInfoArray",userInfoArray);
            



            const userExists = userInfoArray.some(user => user.email === newUser.email)

            if(userExists){
                Alert.alert('Error','User already exists')
                return;
            }

            const allUsers = [...userInfoArray,newUser];
            console.log("allusersss",allUsers);
            
            
            dispatch(setUserInfo({allUsers}))
            console.log('====================================');
            console.log("resultuserinfosucesffullly",userInfo);
            console.log('====================================');
            // const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:selectedDate,phonenumber:phonenumber,value:value,otp:otp}
            // console.log("dataaaalast",data);
            navigation.navigate('AddFingerprint')
        }
        else{
            console.log("errorrrr");
        }
    }


    const goBack = () => {
        // const data = route.params
        console.log('====================================');
        console.log("backdataroot",route.params);
        console.log('====================================');
        navigation.navigate('ProfileFill',route.params)
    }

    
  return (
    <ScrollView style={[flex(1),styles.bgWhite]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[flex(1)]}>
            <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
                <Icon name="arrow-left" onPress={goBack} size={19} style={[styles.black]}/>
                <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Create New Pin"}/>
            </View>

            <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
                <TextComponent style={[styles.textCenter,styles.black_500]} fontWeight={'500'} size={20} title={'Add a PIN number to make your account more secure'}/>
            </View>


            <View style={[styles.row,styles.spaceEvenly,{gap:15},marginPosition(0,25,40,25)]}>
                {otp.map((value,index) =>(
                    <TextInput
                    key={index}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    maxLength={1}
                    style={[styles.textCenter,fontSize(30),radius(10),styles.black,flex(1),borderWidth(2),,{borderColor:focusedIndex === index? "#000000" : "#ffffff",backgroundColor: "#F6F5F2", elevation: 2}]}
                    secureTextEntry={true}
                    keyboardType={'numeric'}
                    value={value}
                    onChangeText={(text) => OtpHandle(text,index)}
                    ref={(ref) => (refs.current[index] = ref)}
                    />
                ))}
            </View>

            {/* <View style={[styles.row, marginPosition(0, 0, 40, 0), {gap:20}, styles.spaceEvenly]}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        maxLength={1}
                        style={[fontSize(20), styles.black, flex(1), borderWidth(2),
                        { borderColor: isFocus ? "#ffffff" : "#F6F5F2", backgroundColor: "#F6F5F2", elevation: 2 }, radius(10), styles.textCenter]}
                        secureTextEntry={true}
                        keyboardType="numeric"
                        value={value}
                        onChangeText={(text) => handleOtpInputChange(text, index)}
                        ref={(ref) => (refs.current[index] = ref)}
                    />

                ))}

            </View> */}



            {/* <ButtonComponent onPress={nextPage} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack]} title={"Continue"}/> */}

            <View style={[marginPosition(20,27,30,27)]}>
                <ButtonComponent onPress={nextPage} title={"Continue"}/>

            </View>
        </View>

    </ScrollView>
  )
}



















// import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { borderColor, borderWidth, flex, fontSize, margin, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import { ButtonComponent, TextComponent, TextInputCompnent,ScreenViewComponent } from '../../components'
// import { useRoute } from '@react-navigation/native'
// import { useDispatch } from 'react-redux'
// import { Colors } from 'react-native/Libraries/NewAppScreen'

// export const CreatePin = ({navigation})=> {

// //     const route = useRoute()
// //   const dispatch = useDispatch()
// //   const data = route.params

//   const [isFocus, setIsFocus] = useState(false)
//   const handleFocus = () => {
//     setIsFocus(true)

//   }
//   const handleBlur = () => {
//     setIsFocus(false)
//   }

//   const [otp, setOtp] = useState(['', '', '', '']);
//   const refs = useRef([]);
//   const handleOtpInputChange = (text, index) => {
//     if (index == 3 && text.length != 1) {
//       refs.current[index - 1].focus();
//     }
//     if (index == 2 && text.length != 1) {
//       refs.current[index - 1].focus();
//     }
//     if (index == 1 && text.length != 1) {
//       refs.current[index - 1].focus();
//     }

//     let newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
//     if (text.length === 1 && index < 3) {
//       refs.current[index + 1].focus();
//     }
//   };

//   let Status = Object.values(otp).some(ele => ele == "")
//   if (!Status) {
//     let otpArr = otp.map(str => parseInt(str))
//     console.log(otpArr)
//   }
//   const goToFingerPrintpage = () => {
//     if(!Status){
//       dispatch(setUserInfo({ email:email,password:password,fullName:fullName,
//         nickName:nickName,phoneno:phoneno,mainDate:mainDate,gender:gender}))
//       navigation.navigate("FingerPrintScreen")
//     }
//   }


//   return (

//     <ScreenViewComponent style={[flex(1), paddingPoistion(40, 20, 0, 20)]}>
//       <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
//       <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
//                 <Icon name="arrow-left" onPress={() =>navigation.navigate('ProfileFill')} size={19} color={'#000000'}/>
//                 <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Create New Pin"}/>
//         </View>

//         <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
//             <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'rgba(150,150,150,255)'} size={20} title={'Add a PIN number to make your account more secure'}/>
//         </View>

    //   <View style={[styles.row, marginPosition(0, 0, 40, 0), {gap:20}, styles.spaceEvenly]}>
    //     {otp.map((value, index) => (
    //       <TextInput
    //         key={index}
    //         onFocus={handleFocus}
    //         onBlur={handleBlur}
    //         maxLength={1}
    //         style={[fontSize(20), styles.black, flex(1), borderWidth(2),
    //         { borderColor: isFocus ? "#ffffff" : "#F6F5F2", backgroundColor: "#F6F5F2", elevation: 2 }, radius(10), styles.textCenter]}
    //         secureTextEntry={true}
    //         keyboardType="numeric"
    //         value={value}
    //         onChangeText={(text) => handleOtpInputChange(text, index)}
    //         ref={(ref) => (refs.current[index] = ref)}
    //       />

    //     ))}

    //   </View>
//       <ButtonComponent textColor={styles.white} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack]} title={"Continue"}/>

//     </ScreenViewComponent>
//   )
// }





















