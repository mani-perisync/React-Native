import { View, Text,StatusBar, Image, TouchableOpacity, Pressable,ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { bgColor, borderColor, borderWidth, flex, fontSize, heightValue, margin, marginPosition, padding, paddingPoistion, radius, styles, textColor, widthValue } from '../../styles/Styles'
import { TextComponent ,ScreenViewComponent, ButtonComponent, TextInputCompnent, CheckBoxComponent, OtherSignupComponent} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Apple, carLogo, Facebook, Google } from '../../constants/links'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn } from '../../redux/authReducer/IsloggedIn'
import { setUserInfo } from '../../redux/userReducer/userInfo'
import Snackbar from 'react-native-snackbar'


export const LoginScreenPage = ({navigation}) => {
    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.user.userInfo)


    const gotoDashboard = () => {
        dispatch(setIsLoggedIn(true))
    }

    


    const [errors, setErrors] = useState({})
    const [passwordVisible, setPasswordVisible] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const loginValidation = () => {
    //     const newErrors = {};

    //     // email
    //     // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //     let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    //     // password

    //     let uppercaseRegex = /[A-Z]/g;
    //     let lowercaseRegex = /[a-z]/g;
    //     let special = /[.*!@#$%^&*]/g; 


    //     // email
    //     if(email.length == ''){
    //         newErrors.email = 'email is required'
    //     }
    //     else if(reg.test(email) === false){
    //         newErrors.email = 'enter valid email address';
    //     }

    //     // password

    //     else if(password.length == '' ){
    //         newErrors.password = 'password is required'
    //     }
    //     else if(password.length == 8){
    //         newErrors.password = 'Password should be at least 8 characters long'
    //     }

    //     else if(uppercaseRegex.test(password) == false || lowercaseRegex.test(password) == false){
    //         newErrors.password = 'Include both upper and lower case letters'
    //     }

    //     else if(special.test(password) == false){
    //         newErrors.password = 'Atleast one special character'
    //     }


    //     if(Object.keys(newErrors).length > 0){
    //         setErrors(newErrors);
    //     }
    //     else{
    //         setErrors('')
    //     }
    // }


    const emailValidator = () => {
        const newErrors = {};

        let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if(email.length == ''){
            newErrors.email = 'email is required'
        }
        else if(reg.test(email) === false){
            newErrors.email = 'enter valid email address';
        }


        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }
    }


    const passwordValidator = () =>{
        const newErrors = {};

        // password
        let uppercaseRegex = /[A-Z]/g;
        let lowercaseRegex = /[a-z]/g;
        let special = /[.*!@#$%^&*]/g; 

        if(password == '' ){
            newErrors.password = 'password is required'
        }

        else if(uppercaseRegex.test(password) == false || lowercaseRegex.test(password) == false){
            newErrors.password = 'Include both upper and lower case letters'
        }

        else if(special.test(password) == false){
            newErrors.password = 'Atleast one special character'
        }
        else if(password.length < 7){
            newErrors.password = 'Password should be at least 8 characters long'
        }


        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }

    }


    const handleLogin = () => {
        if(errors==''){

            const userInfoArray = Array.isArray(userInfo)? userInfo : []

            // const userEmailInvalid = userInfoArray.some(user => user.email !== email)
            const userPasswordInvalid = userInfoArray.some(user => user.password !== password)

            const userNotExist = userInfoArray.find(user => user.email === email)

            if(!userNotExist){
                return Snackbar.show({
                    text:"User does not exist",
                    backgroundColor:"#EA7773",
                    textColor:'#000000',
                    duration:Snackbar.LENGTH_LONG
                })
            }

            // if(userEmailInvalid){
            //     return Snackbar.show({
            //         text:"User email is invalid",
            //         backgroundColor:"#EA7773",
            //         textColor:'#000000',
            //         duration:Snackbar.LENGTH_LONG
            //     })
            // }

            if(userPasswordInvalid){
                return Snackbar.show({
                    text:"User Password is invalid",
                    backgroundColor:"#EA7773",
                    textColor:'#000000',
                    duration:Snackbar.LENGTH_LONG
                })
            }



            Snackbar.show({
                text:"Login Successfully",
                backgroundColor:"#000000",
                textColor:'#ffff',
                duration:Snackbar.LENGTH_SHORT
            })

            console.log("sucesssssssss");
            gotoDashboard();
            
        }
        else{
            console.log("erorrrrrrrrrrrrrrrrrrrrrrr");
        }
    }

    
  return (
    <ScreenViewComponent style={[flex(1),styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
      <View style={[flex(1)]}>
        <Icon name="arrow-left" size={20} onPress={() => navigation.navigate('LoginScreen')} style={[paddingPoistion(40,30,20,30),marginPosition(40,0,0,0),styles.black]}/>
        <View style={[styles.allCenter,padding(0,10,0)]}>
          <Image
          source={ carLogo }
          style={[{height:150,width:150}]}
          />
        </View>

        <TextComponent style={[styles.selfCenter]} fontWeight={600} size={35} title={"Login to Your Account"}/>

        <View style={[paddingPoistion(25,0,0,0),{width:'100%'}]}>
            {/* emailfield */}
            <View style={[styles.allCenter,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,20,3,25),styles.bgGray2]}>
                <Icon
                name='envelope'
                size={15}
                style={[email !==""? styles.black : styles.black_400]}
                />

                <TextInputCompnent size={18} onChangeText={value => {setEmail(value); emailValidator(value);}} keyboardType={"email-address"} value={email} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Email"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>


            </View>


            {/* emailerror */}
            {errors.email && <TextComponent size={18} style={[styles.selfStart,marginPosition(0,0,10,20),styles.red]} title={errors.email}></TextComponent>}



            {/* password */}
            <View style={[styles.spaceBetween,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,40,3,25),styles.bgGray2]}>
                <View style={[styles.row,styles.allCenter]}>
                    <Icon
                    name='lock'
                    size={15}
                    style={[password !==""? styles.black : styles.black_400]}
                    />

                    {/* <TextInputCompnent onChangeText={value => {setPassword(value); signupValidation(value);}} value={password} secureTextEntry={passwordVisible} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Password"} style={[borderWidth(1),textColor('#000000'),fontSize(10),borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/> */}

                    <TextInputCompnent size={18} onChangeText={value => {setPassword(value); passwordValidator(value);}} value={password} secureTextEntry={passwordVisible} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Password"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>


                </View>
                <Pressable>
                    <Icon
                    name={passwordVisible ? 'eye' : 'eye-slash'}
                    size={15}
                    style={[!passwordVisible? styles.black : styles.black_400]}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                </Pressable>

            </View>

            {/* passworderror */}
            {errors.password && <TextComponent size={18} style={[styles.selfStart,marginPosition(0,0,10,20),styles.red]} title={errors.password} />}



            <View style={[styles.row,styles.allCenter]}>
                {/* <CheckBoxComponent size={22} borderWidth={3} borderColor={'#000000'} style={[styles.selfCenter]}/> */}
                <TextComponent size={16} fontWeight={700} style={[paddingPoistion(0,0,0,10)]} title={"Remember me"}/>
            </View>


            {/* <ButtonComponent onPress={signupValidation} textColor={'#ffffff'} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,20,0),marginPosition(20,0,10,20),styles.bgBlack]} title={"Sign in"} /> */}

            <View style={[marginPosition(20,27,10,27)]}>
                <ButtonComponent onPress={handleLogin} disabled={email!=='' && password!=='' && errors==''? false : true} style={[email!=='' && password!==''? styles.bgBlack : styles.bgBlack_100]} title={"Sign in"}/>

            </View>

            <TextComponent size={18} onPress={() => navigation.navigate('ForgetPassword')} fontWeight={700} style={[styles.selfCenter,marginPosition(15,0,10,0)]} title={'Forgot Password?'}/>


            <View style={[styles.row,styles.allCenter,marginPosition(20,45,35,45)]}>

                <View style={[flex(1),borderWidth(0.4),styles.border_black_200]}></View>

                <View>
                    <TextComponent size={18} fontWeight={700} style={[padding(0,0,13),styles.black_600]} title={"or continue with"}/>
                </View>

                <View style={[flex(1),borderWidth(0.4),styles.border_black_200]}></View>

            </View>

            {/* other */}

            <View style={[styles.row,styles.selfCenter,]}>
                <OtherSignupComponent

                // icon
                source={Facebook}
                heightValue={30}
                widthValue={30}

                />
                <OtherSignupComponent
                // icon
                source={Google}
                heightValue={25}
                widthValue={25}
                style={[marginPosition(0,15,0,15)]}

                />
                <OtherSignupComponent
                // icon
                source={Apple}
                heightValue={25}
                widthValue={25}

                />

            </View>


            <Text style={[styles.selfCenter,marginPosition(30,0,0,0),styles.black_300,styles.fontWeight700]}>
                Don't have an account?
                <Text onPress={() => navigation.navigate('SignupScreen')} style={[styles.fontWeight700,styles.black]}> Sign up</Text>
            </Text>

        </View>
      </View>
    </ScreenViewComponent>
  )
}
