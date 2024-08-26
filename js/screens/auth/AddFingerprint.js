import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { borderWidth, flex, margin, marginPosition, padding, paddingPoistion, radius, styles, textColor } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ButtonComponent, LoaderCompnent, ScreenViewComponent, TextComponent } from '../../components'
import { AvatarIcon, Fingerprint } from '../../constants/links'
import { useRoute } from '@react-navigation/native'
import { Colors } from '../../styles/Colors'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/authReducer/IsloggedIn'
export const AddFingerprint = ({navigation})=> {
    const dispatch = useDispatch()
    
    const [modalVisible, setModalVisible] = useState(false);
    const gotoDashboard = () => {
        dispatch(setIsLoggedIn(true))
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //     //   gotoDashboard();
    //     //   navigation.replace('Dashboard');
    //     },1000)
    // }, [])


    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                gotoDashboard();
            }, 1000); // Wait 1 second before navigating

            // Cleanup the timer if the component unmounts before the timeout
            return () => clearTimeout(timer);
        }
    }, [modalVisible]);


  return (
    <ScreenViewComponent style={[flex(1)]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[flex(1)]}>
            <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
                <Icon name="arrow-left" onPress={() =>navigation.navigate('CreatePin')} size={19} style={[styles.black]}/>
                <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'700'} size={23} title={"Set Your Fingerprint"}/>
            </View>

            <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
                <TextComponent style={[styles.textCenter,styles.black_400]} fontWeight={'500'} size={20} title={'Add a Fingerprint to make your account more secure'}/>
                {/* <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'#000000'} size={20} title={'Add a Fingerprint to make your account more secure'}/> */}

            </View>

            <View style={[styles.selfCenter]}>
                <Image
                source={ Fingerprint }
                style={[{height:230,width:230}]}
                />   
            </View>

            <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
                <TextComponent style={[styles.textCenter,styles.black_400]} fontWeight={'500'} size={20} title={'Please put your finger on the fingerprint scanner to get started'}/>
            </View>

            {/* <View style={[styles.row,styles.selfCenter,{width:'100%'}]}>
                <ButtonComponent textColor={'#000000'} fontWeight={600} size={18} style={[{width:'40%'},radius(50),padding(0,15,0),marginPosition(50,0,10,30),styles.bgGray1]} title={"Skip"}/>
                <ButtonComponent onPress={() => navigation.navigate('Success')} textColor={'#ffffff'} fontWeight={600} size={18} style={[{width:'40%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack1]} title={"Continue"}/>

            </View> */}

            <View style={[styles.row,styles.selfCenter,marginPosition(0,30,0,30)]}>
                {/* <ButtonComponent onPress={nextPage} title={"Continue"}/> */}
                <ButtonComponent color={Colors.black} onPress={gotoDashboard} fontWeight={600} size={18} style={[flex(1),radius(50),padding(0,15,0),marginPosition(50,0,10,0),styles.bgGray1,styles.black]} title={"Skip"}/>
                <ButtonComponent color={Colors.white} onPress={() => setModalVisible(true)} fontWeight={600} size={18} style={[flex(1),radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack1]} title={"Continue"}/>


            </View>

        </View>

        <Modal
        transparent={true}
        visible={modalVisible}
        >
            <View style={[flex(1),styles.allCenter,styles.bgBlack_600]}>

            <View style={[styles.centerHorizontal,styles.bgWhite,radius(20),marginPosition(40,40,40,40)]}>
                <Image
                source={AvatarIcon}
                style={[{height:130,width:130},marginPosition(50,0,0,0)]}
                />
                <View style={[marginPosition(30,0,0,0),styles.allCenter,{gap:20}]}>
                    <View>
                        <TextComponent style={[styles.textCenter]} size={25} fontWeight={'700'} title={'Congratulations!'}/>

                    </View>
                    <View>
                        <TextComponent style={[styles.textCenter,padding(0,0,40),styles.black_400]} size={18} fontWeight={'500'} title={'Your account is ready to use. You will be reduced to the Home Page in a few seconds '}/>

                    </View>
                    <LoaderCompnent
                    color={Colors.black}
                    size={40}
                    style={[marginPosition(30,0,40,0),flex(0)]}
                    />
                </View>
            </View>
            </View>
            
        </Modal>
    </ScreenViewComponent>
  )
}















// import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { flex, margin, marginPosition, padding, paddingPoistion, radius, styles, textColor } from '../../styles/Styles'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import { ButtonComponent, LoaderCompnent, ScreenViewComponent, TextComponent } from '../../components'
// import { AvatarIcon, Fingerprint } from '../../constants/links'
// import { useRoute } from '@react-navigation/native'
// import { Colors } from '../../styles/Colors'

// export const AddFingerprint = ({navigation})=> {

//     // const [modalVisible, setModalVisible] = useState(false);

//     // useEffect(() => {
//     //     setTimeout(() => {
//     //       navigation.replace('Dashboard')
//     //     },1000)
//     // }, [])


//   return (
//     <ScreenViewComponent style={[flex(1),{backgroundColor:modalVisible? 'rgba(83,88,97,255)':'#ffffff'}]}>
//         <StatusBar translucent backgroundColor={"transparent"}/>
//         <View style={[flex(1)]}>
//             <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
//                 <Icon name="arrow-left" onPress={() =>navigation.navigate('CreatePin')} size={19} color={'#000000'}/>
//                 <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'700'} size={23} title={"Set Your Fingerprint"}/>
//             </View>

//             <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
//                 <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'rgba(148,148,148,255)'} size={20} title={'Add a Fingerprint to make your account more secure'}/>
//                 {/* <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'#000000'} size={20} title={'Add a Fingerprint to make your account more secure'}/> */}

//             </View>

//             <View style={[styles.selfCenter]}>
//                 <Image
//                 source={ Fingerprint }
//                 style={[{height:230,width:230}]}
//                 />   
//             </View>

//             <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
//                 <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'rgba(148,148,148,255)'} size={20} title={'Please put your finger on the fingerprint scanner to get started'}/>
//             </View>

//             <View style={[styles.row,styles.selfCenter,{width:'100%'}]}>
//                 <ButtonComponent textColor={'#000000'} fontWeight={600} size={18} style={[{width:'40%'},radius(50),padding(0,15,0),marginPosition(50,0,10,30),styles.bgGray1]} title={"Skip"}/>
//                 <ButtonComponent onPress={() => setModalVisible(true)} textColor={'#ffffff'} fontWeight={600} size={18} style={[{width:'40%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack1]} title={"Continue"}/>


//             </View>

//         </View>

//         <Modal
//         transparent={true}
//         visible={modalVisible}
//         >
//             <View style={[flex(1),styles.centerHorizontal,{backgroundColor: '#ffffff'},margin(40,180,40),radius(20)]}>
//                 <Image
//                 source={AvatarIcon}
//                 style={[{height:130,width:130},marginPosition(50,0,0,0)]}
//                 />
//                 <View style={[marginPosition(30,0,0,0),styles.allCenter,{gap:20}]}>
//                     <View>
//                         <TextComponent style={[styles.textCenter]} size={25} fontWeight={'700'} title={'Congratulations!'}/>

//                     </View>
//                     <View>
//                         <TextComponent color={'rgba(148,148,148,255)'} style={[styles.textCenter,padding(0,0,40)]} size={18} fontWeight={'500'} title={'Your account is ready to use. You will be reduced to the Home Page in a few seconds '}/>

//                     </View>
//                     <LoaderCompnent
//                     color={Colors.black}
//                     size={50}
//                     style={[marginPosition(30,0,0,0)]}
//                     />
//                 </View>
//             </View>
//         </Modal>
//     </ScreenViewComponent>
//   )
// }

