import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { borderColor, borderWidth, flex, heightValue, marginPosition, screenHeight, screenWidth, styles, widthValue } from '../../styles/Styles'
import { carLogo } from '../../constants/links'
import { LoaderCompnent } from '../../components'
import { Colors } from '../../styles/Colors'


export const SplashScreen = ({navigation})=> {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomePage')
    },5000)
  }, [])
  
  return (
    <View style={[flex(1),styles.allCenter,styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
     <View  style={[{height:heightValue(2.5),width:widthValue(2.5)},flex(10)]}>
        <Image
        source={carLogo}
        // style={[flex(10),borderWidth(1),borderColor('#000000')]}
        style={[{height:"100%",width:"100%"}]}
        resizeMode='contain'
        />
      </View>
      
      <LoaderCompnent 
      color={Colors.black}
      size={50}
      style={[marginPosition(0,0,80,0),flex(1),styles.centerVertical]}
      />

    </View>
  )
}
