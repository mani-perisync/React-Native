import { Image, Pressable, ScrollView, StatusBar, Text, TextInput, View,TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, opacity, padding, paddingPoistion, position, radius, screenWidth, styles, textColor, widthValue, zIndex } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ButtonComponent, ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
import { Profile } from '../../constants/links'
import DropDownPicker from 'react-native-dropdown-picker'
import { launchImageLibrary } from 'react-native-image-picker'
import { CountryFlag, GenderDropDown } from '../../constants/CountryFlag'
import { useRoute } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker'
// import { useDispatch, useSelector } from 'react-redux'
// import { setUserInfo } from '../../redux/userReducer/userInfo'



export const ProfileFill = ({navigation}) => {

    // const dispatch=useDispatch()
    // const { userInfo } = useSelector(state => state.user.userInfo)
    // console.log('====================================');
    // console.log("userInfo",userInfo);
    // console.log('====================================');
    const route = useRoute()
    const {email,password} = route.params
    console.log(email,password);

    // const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:selectedDate,phonenumber:phonenumber,value:value}
    // console.log('datatatatattatata',data);


    
    
    
    
    const [errors, setErrors] = useState({})
    const [name, setName] = useState('')
    const [nickname, setNickName] = useState('')
    // const [dateofbirth, setDateofBirth] = useState('')
    // const [code,setCode] = useState('')
    const [phonenumber, setPhoneNumber] =useState('')
    // const [gender, setGender] = useState('')

    const [galleryPhoto, setGalleryPhoto] = useState();

    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);





    // dateofbirth
    const handleDateChange = (date) => {

        setSelectedDate(date);
        setModalVisible(false);
    }



    const formatDate = (date) => {
        if(!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };


    // 
    // image picker
    // 
    let options = {
        saveToPhotos:true,
        mediaType:'photo',
    }

    const openGallery = async () =>{
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }
    
    // 
    //gender dropdown
    // 
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
        CountryCode();
    }, []);

    const fetchItems = async () => {

        try {
            const GenderData = GenderDropDown.map((item,index) => ({
                label:item.gender,
                value: item.id || index.toString(),
            })) 

            setItems(GenderData);
s

        } catch (error) {
          console.error('Error genderData fetching items:', error);
        }
    };
 

    // 
    // phonenumber country flag dropdown
    // 

    const [openCountry, setOpenCountry] = useState(false);
    const [countryValue, setCountryValue] = useState(null);
    const [countryItems, setCountryItems] = useState([]);




    const CountryCode = async () => {
        try {
            const Data = CountryFlag.map((item,index) => ({
                label:item.flag,
                value: item.id || index.toString(),
            })) 

            setCountryItems(Data);


        } catch (error) {
          console.error('Error countrycode fetching items:', error);
        }
    };
 




    // const handleSubmit = () =>{
    //     let regex = /^\d{10}$/;
    //     const newErrors = {}

    // if(name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""){
        // dispatch(setUserInfo([])) 
        // const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:formatDate(selectedDate),phonenumber:phonenumber,value:value}
        // console.log('datatatatattatata',data);
        // navigation.navigate('CreatePin',data)
        // alert("okkk")

    // }else{
    //     if(name==""){
    //         newErrors.name = 'Name is required'
        
    //     } else if(nickname ==""){
    //         newErrors.nickname = 'Nickname is required' 
    //     }
    //      else if(selectedDate == null){
    //         newErrors.selectedDate = 'Dob is required' 
    //     }
    //     else if(countryValue ==null){
    //         newErrors.countryValue = 'code is required' 
    //     }
    //     else if(phonenumber ==""){
    //         newErrors.phonenumber = 'number is required' 
    //     }else if(regex.test(phonenumber) === false){
    //         newErrors.phonenumber = 'Enter valid Phone number'
    //     }
    //     // else if(regex.test(phonenumber) === true){
    //     //     newErrors.phonenumber = ''
    //     // }
    //     else if(value ==null){
    //         newErrors.value = 'gender is required' 
    //     }
    // }

    //     console.log('====================================');
    //     console.log("newErrors",newErrors);
    //     console.log('====================================');

    //     if(Object.keys(newErrors).length > 0){
    //         setErrors(newErrors);
    //     }

    //     // else{
    //     //     console.log('submited');
    //     //     navigation.navigate('CreatePin',{name:name})
    //     // }

        
    // }


    const nameValidator = () => {
        const newErrors = {}
        if(name==""){
            newErrors.name = 'Name is required'
        } 

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }
    }

    const nicknameValidator = () => {
        const newErrors = {}

        if(nickname ==""){
            newErrors.nickname = 'Nickname is required' 
        }


        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }

    }

    const dobValidator = () => {
        const newErrors = {}

        if(selectedDate == null){
            newErrors.selectedDate = 'Dob is required' 
        }


        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }

    }


    const numberValidator = () => {
        const newErrors = {}
        let regex = /^\d{10}$/;

        if(countryValue ==null){
            newErrors.countryValue = 'code is required' 
        }
        if(phonenumber ==""){
            newErrors.phonenumber = 'number is required' 
        }
        else if(regex.test(phonenumber) === false){
            newErrors.phonenumber = 'Enter valid Phone number'
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }

    }


    const genderValidator = () => {
        const newErrors = {}

        if(values ==''){
            newErrors.values = 'gender is required' 
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            console.log(newErrors);
            
        }
        else{
            setErrors('');
        }

    }


    const handleSubmit = () => {
        if(errors == ''){
            Alert.alert('sucesfully')
            console.log('submited');
            const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:formatDate(selectedDate),phonenumber:phonenumber,value:values}
            console.log('datatatatattatata',data);
            navigation.navigate('CreatePin',data)
        }
        else{
            console.log("erorrrrrrrrrrrrrrrrrrrrrrr");
        }
    }







  return (
    <ScreenViewComponent style={[flex(1),styles.bgWhite]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[flex(1)]}>
            <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,20,25)]}>
                <Icon name="arrow-left" size={18} style={[styles.black]} onPress={() => navigation.navigate('SignupScreen')}/>
                <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Fill You Profile"}/>
            </View>

            <ScrollView>
                <View style={[padding(0,25,0),{width:200},styles.selfCenter]}>
                    <Image 
                    source={galleryPhoto? {uri: galleryPhoto} : Profile} resizeMode='cover' style={[{height:140,width:140},styles.selfCenter,radius(100)]}/>

                    
                    <TouchableOpacity onPress={openGallery} style={[borderWidth(1),padding(5),radius(7),styles.bgBlack,styles.positionAbsolute,{bottom:35,right:35}]}>
                        <Icon
                        name='pen'
                        size={13}
                        style={[styles.white]}
                        // color={'#ffffff'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[paddingPoistion(25,0,0,0),{width:'100%'}]}>

                    {/* full name */}
                    <View style={[styles.allCenter,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,20,3,5),styles.bgGray3]}>
                        <TextInputCompnent onChangeText={value => {{setName(value); nameValidator(value)}}} value={name} size={16} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Full Name"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
                    </View>

                    {/* nameerror */}
                    {/* {errors.name && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.name}/>} */}


                    {/* Nickname */}
                    <View style={[styles.allCenter,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,20,3,5),styles.bgGray3]}>
                        <TextInputCompnent onChangeText={value => {{setNickName(value); nicknameValidator(value)}}} size={16} value={nickname} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Nickname"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
                    </View>

                    {/* nickname */}
                    {/* {errors.nickname && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.nickname}/>} */}


                    {/* date of birth */}

                    <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.spaceBetween,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,30,3,5),styles.bgGray3]}>
                        <View style={[styles.row,styles.allCenter]}>
                            <TextInputCompnent editable={false} onChangeText={value => {{setSelectedDate(value); dobValidator(value)}}} value={formatDate(selectedDate)} size={16} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Date of Birth"} style={[borderWidth(1),styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
                        </View>
                        <View

                        >
                            <Icon
                            name='calendar-days'
                            size={15}
                            style={[selectedDate!==""? styles.black : styles.black_400]}
                            >
                            </Icon>
                        </View>
                    </TouchableOpacity>
                    <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={[flex(1),styles.allCenter,styles.bgBlack_400]}>
                            <View style={[styles.bgWhite,padding(20),radius(10),{width:'100%'}]}>
                                <CalendarPicker
                                onDateChange={handleDateChange}
                                selectedDayColor="#00BFFF"
                                selectedDayTextColor="#FFFFFF"
                                todayBackgroundColor="#FF6347"
                                todayTextStyle={{ color: '#FFFFFF' }}
                                previousTitle="Previous"
                                nextTitle="Next" 
                                monthTitleStyle={[{color:'#00BFFF'},fontSize(20)]}
                                />
                                <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={[marginPosition(20,0,0,0),styles.centerHorizontal,padding(10),radius(5),{backgroundColor:'#007BFF'}]}
                                >
                                    <TextComponent title={'Close'} size={16} style={[styles.white]}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>


                    {/* {errors.selectedDate && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.selectedDate}/>} */}




                    {/* email */}

                    <View style={[styles.spaceBetween,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,30,3,5),styles.bgGray3]}>
                        <View style={[styles.row,styles.allCenter]}>
                            <TextInputCompnent size={16} editable={false} placeholderTextColor={'#000000'} placeholder={route.params.email} style={[borderWidth(1),styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
                        </View>
                        <View>
                            <Icon
                            name='envelope'
                            size={15}
                            style={[styles.black]}
                            />
                        </View>
                    </View>

                    {/* phone number */}

                    <View style={[{zIndex:99},styles.row,marginPosition(0,20,20,20),radius(10),styles.bgGray3]}>

                        <View style={[{width:'20%'}]}>
                            <DropDownPicker
                            open={openCountry}
                            value={countryValue}
                            items={countryItems}
                            setOpen={setOpenCountry}
                            setValue={setCountryValue}
                            setItems={setCountryItems}
                            placeholder='+1'
                            placeholderStyle={{
                                color:'rgba(158,158,158,255)', 
                                fontSize:15,
                            }}
                            dropDownDirection='TOP'

                            // onSelectItem={value=>{setGender(value); handleSubmit(value);}}
                            onChangeValue={value => {{setCountryValue(value); numberValidator(value)}}}
                            

                            style={[{width:'100%'},styles.bgGray,borderWidth(0)]}
                            />
                        </View>

                        <View style={[{width:'80%'}]}>
                            <TextInputCompnent maxLength={10} onChangeText={value => {{setPhoneNumber(value); numberValidator(value)}}} keyboardType={'numeric'} value={phonenumber} size={15} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Phone Number"} style={[styles.black,fontSize(10),borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
                        </View>
                    </View>

                    {/* {errors.countryValue && <TextComponent size={18} style={[styles.selfStart,marginPosition(-10,0,10,20),styles.red]} title={errors.countryValue}/>} */}
                    {/* {errors.phonenumber && <TextComponent size={18} style={[styles.selfStart,marginPosition(0,0,10,20),styles.red]} title={errors.phonenumber}/>} */}





                    <View style={[{zIndex:99},marginPosition(0,20,20,20),radius(10),styles.bgGray3]}>
                        <DropDownPicker
                        open={open}
                        value={values}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValues}
                        setItems={setItems}
                        placeholder='Gender'
                        placeholderStyle={{
                            color:'rgba(158,158,158,255)', 
                            fontSize:15
                        }}

                        // onSelectItem={value=>{setGender(value); handleSubmit(value);}}
                        onChangeValue={value => {{setValues(value); genderValidator(value)}}}
                        

                        style={[{width:'100%'},styles.bgGray,borderWidth(0),paddingPoistion(5,10,4,10)]}
                        />
                    </View>

                    {/* {errors.value && <TextComponent size={18} style={[styles.selfStart,marginPosition(-10,0,10,20),styles.red]} title={errors.value}/>} */}



                </View>


                {/* <ButtonComponent onPress={handleSubmit} textColor={'#ffffff'} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""? styles.bgBlack:styles.bgGray]} title={"Continue"}/> */}


                {/* <View style={[marginPosition(10,10,20,10)]}>

                    <ButtonComponent onPress={handleSubmit} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""? styles.bgBlack:styles.bgGreen]} title={"Continue"}/>

                </View> */}

                <View style={[marginPosition(10,10,20,10)]}>

                    <ButtonComponent onPress={handleSubmit} disabled={name!==''&& nickname!==''&& selectedDate!==''&&countryValue!==''&&phonenumber!==''&&values!==''&&errors==''? false : true} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), name!==''&& nickname!==''&& selectedDate!==''&&countryValue!==''&&phonenumber!==''&&values!==''? styles.bgBlack:styles.bgBlack_400]} title={"Continue"}/>

                </View>
            </ScrollView>

            



        </View>
    </ScreenViewComponent>
  )
}





























// import { Image, Pressable, ScrollView, StatusBar, Text, TextInput, View,TouchableOpacity, Modal, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, opacity, padding, paddingPoistion, position, radius, screenWidth, styles, textColor, widthValue, zIndex } from '../../styles/Styles'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import { ButtonComponent, ScreenViewComponent, TextComponent, TextInputCompnent } from '../../components'
// import { Profile } from '../../constants/links'
// import DropDownPicker from 'react-native-dropdown-picker'
// import { launchImageLibrary } from 'react-native-image-picker'
// import { CountryFlag, GenderDropDown } from '../../constants/CountryFlag'
// import { useRoute } from '@react-navigation/native'
// import CalendarPicker from 'react-native-calendar-picker'
// import { useDispatch, useSelector } from 'react-redux'
// import { setUserInfo } from '../../redux/userReducer/userInfo'



// export const ProfileFill = ({navigation}) => {

//     const dispatch=useDispatch()
//     const { userInfo } = useSelector(state => state.user.userInfo)
//     console.log('====================================');
//     console.log("userInfo",userInfo);
//     console.log('====================================');
//     const route = useRoute()
//     const {email,password} = route.params
//     console.log(email,password);

//     // const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:selectedDate,phonenumber:phonenumber,value:value}
//     // console.log('datatatatattatata',data);


    
    
    
    
//     const [errors, setErrors] = useState({})
//     const [name, setName] = useState('')
//     const [nickname, setNickName] = useState('')
//     // const [dateofbirth, setDateofBirth] = useState('')
//     const [code,setCode] = useState('')
//     const [phonenumber, setPhoneNumber] =useState('')
//     // const [gender, setGender] = useState('')

//     const [galleryPhoto, setGalleryPhoto] = useState();

//     const [selectedDate, setSelectedDate] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);





//     // dateofbirth
//     const handleDateChange = (date) => {

//         setSelectedDate(date);
//         setModalVisible(false);
//     }



//     const formatDate = (date) => {
//         if(!date) return '';
//         const year = date.getFullYear();
//         const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//         const day = String(date.getDate()).padStart(2, '0');
//         return `${day}/${month}/${year}`;
//     };


//     // 
//     // image picker
//     // 
//     let options = {
//         saveToPhotos:true,
//         mediaType:'photo',
//     }

//     const openGallery = async () =>{
//         const result = await launchImageLibrary(options);
//         setGalleryPhoto(result.assets[0].uri);
//     }
    
//     // 
//     //gender dropdown
//     // 
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetchItems();
//         CountryCode();
//     }, []);

//     const fetchItems = async () => {

//         try {
//             const GenderData = GenderDropDown.map((item,index) => ({
//                 label:item.gender,
//                 value: item.id || index.toString(),
//             })) 

//             setItems(GenderData);

//         } catch (error) {
//           console.error('Error genderData fetching items:', error);
//         }
//     };
 

//     // 
//     // phonenumber country flag dropdown
//     // 

//     const [openCountry, setOpenCountry] = useState(false);
//     const [countryValue, setCountryValue] = useState(null);
//     const [countryItems, setCountryItems] = useState([]);




//     const CountryCode = async () => {
//         try {
//             const Data = CountryFlag.map((item,index) => ({
//                 label:item.flag,
//                 value: item.id || index.toString(),
//             })) 

//             setCountryItems(Data);


//         } catch (error) {
//           console.error('Error countrycode fetching items:', error);
//         }
//     };
 




//     // const handleSubmit = () =>{
//     //     let regex = /^\d{10}$/;
//     //     const newErrors = {}

//     // // if(name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""){
//     // //     // dispatch(setUserInfo([])) 
//     // //     const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:formatDate(selectedDate),phonenumber:phonenumber,value:value}
//     // //     console.log('datatatatattatata',data);
//     // //     navigation.navigate('CreatePin',data)
//     // //     // alert("okkk")

//     // // }
//     // if(name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""){
//     //     // dispatch(setUserInfo([])) 
//     //     const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:formatDate(selectedDate),phonenumber:phonenumber,value:value}
//     //     console.log('datatatatattatata',data);
//     //     navigation.navigate('CreatePin',data)
//     //     alert("okkk")

//     // }
//     // else{
//     //     if(name==""){
//     //         newErrors.name = 'Name is required'
        
//     //     } if(nickname ==""){
//     //         newErrors.nickname = 'Nickname is required' 
//     //     }
//     //      if(selectedDate == null){
//     //         newErrors.selectedDate = 'Dob is required' 
//     //     }
//     //      if(countryValue ==null){
//     //         newErrors.countryValue = 'code is required' 
//     //     }
//     //      if(phonenumber ==""){
//     //         newErrors.phonenumber = 'number is required' 
//     //     }else if(regex.test(phonenumber) === false){
//     //         newErrors.phonenumber = 'Enter valid Phone number'
//     //     }
//     //     // else if(regex.test(phonenumber) === true){
//     //     //     newErrors.phonenumber = ''
//     //     // }
//     //      if(value ==null){
//     //         newErrors.value = 'gender is required' 
//     //     }
//     // }

//     //     console.log('====================================');
//     //     console.log("newErrors",newErrors);
//     //     console.log('====================================');

//     //     if(Object.keys(newErrors).length > 0){
//     //         setErrors(newErrors);
//     //         console.log('====================================');
//     //         console.log(newErrors);
//     //         console.log('====================================');
//     //     }

//     //     // else{
//     //     //     console.log('submited');
//     //     //     navigation.navigate('CreatePin',{name:name})
//     //     // }

        
//     // }

//     const handleSubmit = () =>{
//         let regex = /^\d{9}$/;
//         const newErrors = {}

    
//         if(name==""){
//             newErrors.name = 'Name is required'
//         } 

//         else if(nickname ==""){
//             newErrors.nickname = 'Nickname is required' 
//         }
//          else if(selectedDate == null){
//             newErrors.selectedDate = 'Dob is required' 
//         }
//          else if(countryValue ==null){
//             newErrors.countryValue = 'code is required' 
//         }
//         else if(phonenumber ==""){
//             newErrors.phonenumber = 'number is required' 
//         }
//         else if(regex.test(phonenumber) === false){
//             newErrors.phonenumber = 'Enter valid Phone number'
//         }
//         // else if(regex.test(phonenumber) === true){
//         //     newErrors.phonenumber = ''
//         // }
//          else if(value ==null){
//             newErrors.value = 'gender is required' 
//         }


//         if(Object.keys(newErrors).length > 0){
//             setErrors(newErrors);
//             console.log('====================================');
//             console.log(newErrors);
//             console.log('====================================');
//         }

//         else{
//             setErrors('')
//             // console.log('submited');
//             // navigation.navigate('CreatePin',{name:name})
//         }

        
//     }

//     const profileSubmit = () => {
//         if(errors == ''){
//             Alert.alert("sucesssfully")
//             console.log("sucessssssssssssssssssssssss");
//             dispatch(setUserInfo([])) 
//             const data = {email:email,password:password,name:name,nickname:nickname,selectedDate:formatDate(selectedDate),phonenumber:phonenumber,value:value}
//             console.log('datatatatattatata',data);
//             navigation.navigate('CreatePin',data)
            
//         }
//         else{
//             console.log("erorrrrrrrrrrrrrrrrrrrr");
  
//         }
//     }





//   return (
//     <ScreenViewComponent style={[flex(1),styles.bgWhite]}>
//         <StatusBar translucent/>
//         <View style={[flex(1)]}>
//             <View style={[styles.row,styles.centerHorizontal,marginPosition(50,0,0,0),paddingPoistion(20,0,20,25)]}>
//                 <Icon name="arrow-left" size={18} style={[styles.black]} onPress={() => navigation.navigate('SignupScreen')}/>
//                 <TextComponent style={[paddingPoistion(0,0,0,15)]} fontWeight={'600'} size={22} title={"Fill You Profile"}/>
//             </View>

//             <ScrollView>
//                 <View style={[padding(0,25,0),{width:200},styles.selfCenter]}>
//                     <Image 
//                     source={galleryPhoto? {uri: galleryPhoto} : Profile} resizeMode='cover' style={[{height:140,width:140},styles.selfCenter,radius(100)]}/>

                    
//                     <TouchableOpacity onPress={openGallery} style={[borderWidth(1),padding(5),radius(7),styles.bgBlack,styles.positionAbsolute,{bottom:35,right:35}]}>
//                         <Icon
//                         name='pen'
//                         size={13}
//                         style={[styles.white]}
//                         // color={'#ffffff'}
//                         />
//                     </TouchableOpacity>
//                 </View>

//                 <View style={[paddingPoistion(25,0,0,0),{width:'100%'}]}>

//                     {/* full name */}
//                     <View style={[styles.allCenter,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,20,3,5),styles.bgGray3]}>
//                         <TextInputCompnent onChangeText={value => {{setName(value); handleSubmit(value)}}} value={name} size={16} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Full Name"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
//                     </View>

//                     {/* nameerror */}
//                     {errors.name && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.name}/>}


//                     {/* Nickname */}
//                     <View style={[styles.allCenter,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,20,3,5),styles.bgGray3]}>
//                         <TextInputCompnent onChangeText={value => {{setNickName(value); handleSubmit(value)}}} size={16} value={nickname} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Nickname"} style={[styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
//                     </View>

//                     {/* nickname */}
//                     {errors.nickname && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.nickname}/>}


//                     {/* date of birth */}

//                     <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.spaceBetween,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,30,3,5),styles.bgGray3]}>
//                         <View style={[styles.row,styles.allCenter]}>
//                             <TextInputCompnent editable={false} onChangeText={value => {{setSelectedDate(value); handleSubmit(value)}}} value={formatDate(selectedDate)} size={16} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Date of Birth"} style={[borderWidth(1),styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
//                         </View>
//                         <View

//                         >
//                             <Icon
//                             name='calendar-days'
//                             size={15}
//                             style={[selectedDate!==""? styles.black : styles.black_400]}
//                             >
//                             </Icon>
//                         </View>
//                     </TouchableOpacity>
//                     <Modal
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => setModalVisible(false)}
//                     >
//                         <View style={[flex(1),styles.allCenter,styles.bgBlack_400]}>
//                             <View style={[styles.bgWhite,padding(20),radius(10),{width:'100%'}]}>
//                                 <CalendarPicker
//                                 onDateChange={handleDateChange}
//                                 selectedDayColor="#00BFFF"
//                                 selectedDayTextColor="#FFFFFF"
//                                 todayBackgroundColor="#FF6347"
//                                 todayTextStyle={{ color: '#FFFFFF' }}
//                                 previousTitle="Previous"
//                                 nextTitle="Next" 
//                                 monthTitleStyle={[{color:'#00BFFF'},fontSize(20)]}
//                                 />
//                                 <TouchableOpacity
//                                 onPress={() => setModalVisible(false)}
//                                 style={[marginPosition(20,0,0,0),styles.centerHorizontal,padding(10),radius(5),{backgroundColor:'#007BFF'}]}
//                                 >
//                                     <TextComponent title={'Close'} size={16} style={[styles.white]}/>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                     </Modal>


//                     {errors.selectedDate && <TextComponent size={18} style={[styles.selfStart,marginPosition(-20,0,10,20),styles.red]} title={errors.selectedDate}/>}




//                     {/* email */}

//                     <View style={[styles.spaceBetween,styles.row,marginPosition(0,20,20,20),radius(10),paddingPoistion(3,30,3,5),styles.bgGray3]}>
//                         <View style={[styles.row,styles.allCenter]}>
//                             <TextInputCompnent size={16} editable={false} value={route.params.email} style={[borderWidth(1),styles.black,borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
//                         </View>
//                         <View>
//                             <Icon
//                             name='envelope'
//                             size={15}
//                             style={[styles.black]}
//                             />
//                         </View>
//                     </View>

//                     {/* phone number */}

//                     <View style={[{zIndex:99},styles.row,marginPosition(0,20,20,20),radius(10),styles.bgGray3]}>

//                         <View style={[{width:'20%'}]}>
//                             <DropDownPicker
//                             open={openCountry}
//                             value={countryValue}
//                             items={countryItems}
//                             setOpen={setOpenCountry}
//                             setValue={setCountryValue}
//                             setItems={setCountryItems}
//                             placeholder='+1'
//                             placeholderStyle={{
//                                 color:'rgba(158,158,158,255)', 
//                                 fontSize:15,
//                             }}
//                             dropDownDirection='TOP'

//                             // onSelectItem={value=>{setCountryValue}}
//                             onChangeValue={value => {{setCountryValue(value); handleSubmit(value)}}}
                            

//                             style={[{width:'100%'},styles.bgGray,borderWidth(0)]}
//                             />
//                         </View>

//                         <View style={[{width:'80%'}]}>
//                             <TextInputCompnent maxLength={10} onChangeText={value => {{setPhoneNumber(value); handleSubmit(value);}}} keyboardType={'numeric'} value={phonenumber} size={15} placeholderTextColor={'rgba(158,158,158,255)'} placeholder={"Phone Number"} style={[styles.black,fontSize(10),borderWidth(0),borderColor("none"),paddingPoistion(4,4,4,0)]}/>
//                         </View>
//                     </View>

//                     {errors.countryValue && <TextComponent size={18} style={[styles.selfStart,marginPosition(-10,0,10,20),styles.red]} title={errors.countryValue}/>}
//                     {errors.phonenumber && <TextComponent size={18} style={[styles.selfStart,marginPosition(0,0,10,20),styles.red]} title={errors.phonenumber}/>}





//                     <View style={[{zIndex:99},marginPosition(0,20,20,20),radius(10),styles.bgGray3]}>
//                         <DropDownPicker
//                         open={open}
//                         value={value}
//                         items={items}
//                         setOpen={setOpen}
//                         setValue={setValue}
//                         setItems={setItems}
//                         placeholder='Gender'
//                         placeholderStyle={{
//                             color:'rgba(158,158,158,255)', 
//                             fontSize:15
//                         }}

//                         // onSelectItem={value=>{setCode(value)}}
//                         onChangeValue={value => {{setValue(value); handleSubmit(value)}}}
                        

//                         style={[{width:'100%'},styles.bgGray,borderWidth(0),paddingPoistion(5,10,4,10)]}
//                         />
//                     </View>

//                     {errors.value && <TextComponent size={18} style={[styles.selfStart,marginPosition(-10,0,10,20),styles.red]} title={errors.value}/>}



//                 </View>


//                 {/* <ButtonComponent onPress={handleSubmit} textColor={'#ffffff'} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""? styles.bgBlack:styles.bgGray]} title={"Continue"}/> */}


//                 {/* <View style={[marginPosition(10,10,20,10)]}>

//                     <ButtonComponent onPress={handleSubmit} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), name!==""&&nickname!==""&&selectedDate!==null&&countryValue!==""&&phonenumber!==""&&value!==""? styles.bgBlack:styles.bgGreen]} title={"Continue"}/>

//                 </View> */}

//                 <View style={[marginPosition(10,10,20,10)]}>

//                     <ButtonComponent onPress={profileSubmit} disabled={errors==''? false : true} style={[{width:'90%'},radius(50),padding(0,15,0),marginPosition(40,0,10,20), errors ==''? styles.bgBlack:styles.bgBlack_400]} title={"Continue"}/>

//                 </View>
//             </ScrollView>

            



//         </View>
//     </ScreenViewComponent>
//   )
// }


