import { ImageBackground, SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { flex,styles,heightValue,widthValue, fontSize, paddingPoistion, padding } from '../../styles/Styles'
import { welcomePageImg } from '../../constants/links'
import { TextComponent } from '../../components'
import { Colors } from '../../styles/Colors'



export const WelcomePage = ({navigation})=> {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('StarterPage')
    },5000)
  }, [])

  return (
    <SafeAreaView style={[flex(1)]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[flex(1),styles.allCenter]}>
            <ImageBackground
            source={ welcomePageImg }
            style={[{height:'100%',width:'100%'}]}
            resizeMode='cover'
            > 
              <View style={[flex(1),styles.verticalEnd,padding(0,40,10)]}>
                <TextComponent style={[styles.fontWeight900,paddingPoistion(10,0,0,0)]} opacity={0.9} size={40} color={Colors.white} title={ "Welcome to 👋" }/>
                <TextComponent style={[paddingPoistion(5,0,0,0),styles.fontWeightBold]} size={100} color={Colors.white} title={"Carea"}/>
                <TextComponent style={[paddingPoistion(10,0,0,0),styles.fontPoppins]} fontWeight={'700'} opacity={0.8} size={21} color={Colors.white} title={"The best car marketplace app of the century for your transportation needed!"}/>

              </View> 
            </ImageBackground>
        </View>
    </SafeAreaView>
  )
}
