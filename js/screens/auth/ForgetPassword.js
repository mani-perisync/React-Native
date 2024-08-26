import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { borderWidth, flex, fontSize, margin, marginPosition, padding, paddingPoistion, radius, styles } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ButtonComponent, TextComponent } from '../../components'

export const ForgetPassword = ({navigation})=> {



    const [otp, setOtp] = useState(["","","",""])
    // const[isFocus, setIsFocus] = useState(false)
    const [focusedIndex, setFocusedIndex] = useState(null);

    console.log("otpppppp",otp);

    

    const handleFocus = (index) => {
        // setIsFocus(true)
        setFocusedIndex(index);

    }
    const handleBlur = () => {
        // setIsFocus(false)
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



  return (
    <ScrollView style={[flex(1),styles.bgWhite]}>
    <StatusBar translucent backgroundColor={"transparent"}/>
    <View style={[flex(1)]}>
        <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,0,25)]}>
            <Icon name="arrow-left" onPress={() =>navigation.navigate('LoginScreenPage')} size={19} color={'#000000'}/>
            <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Forgot Password"}/>
        </View>

        <View style={[styles.selfCenter,margin(50),paddingPoistion(50,0,10,0)]}>
            <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'#000000'} size={19} title={'Code has been send to +1 111 *******99'}/>
        </View>


        <View style={[styles.row,styles.spaceEvenly,{gap:15},marginPosition(0,25,40,25)]}>
            {otp.map((value,index) =>(
                <TextInput
                key={index}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={1}
                style={[styles.textCenter,fontSize(30),radius(10),styles.black,flex(1),borderWidth(2),{borderColor:focusedIndex === index? '#000000':'#ffffff',backgroundColor: "#F6F5F2", elevation: 2}]}
                secureTextEntry={true}
                keyboardType={'numeric'}
                value={value}
                onChangeText={(text) => OtpHandle(text,index)}
                ref={(ref) => (refs.current[index] = ref)}
                />
            ))}
        </View>

        <View style={[styles.selfCenter,marginPosition(15,0,35,0)]}>
            <TextComponent style={[styles.textCenter]} fontWeight={'500'} color={'#000000'} size={19} title={'Resend code in 55s'}/>
        </View>


        <ButtonComponent textColor={'#ffffff'} fontWeight={600} size={18} style={[borderWidth(1),{width:'90%'},radius(50),padding(0,15,0),marginPosition(50,0,10,20),styles.bgBlack]} title={"Verify"}/>

    </View>

</ScrollView>

  )
}
