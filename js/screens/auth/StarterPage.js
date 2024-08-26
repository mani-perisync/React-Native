import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { starterPageImg } from '../../constants/links'
import { flex, styles,heightValue,widthValue, borderWidth, opacity, position,padding, paddingPoistion, radius, marginPosition, buttonColor, bgColor, fontSize, margin, textColor, borderColor } from '../../styles/Styles'
import { ButtonComponent, SwiperComponent, TextComponent } from '../../components'
import { Colors } from '../../styles/Colors'
import Swiper from 'react-native-swiper'

export const StarterPage = ({navigation})=> {
  return (
    <SafeAreaView style={[flex(1),styles.bgWhite]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <Swiper
        dot={
            <View
              style={[styles.bgBlack_200,margin(3),radius(100),{width: 7,height: 7,}]}
            />
        }
        activeDot={
            <View
              style={[styles.bgBlack,radius(4),margin(3),{width: 20,height: 7}]}
            />
        }
          paginationStyle={{
            alignItems:'center',
            bottom: 40,
        }}
        // loop
        >
            {/* slide1 */}
            <SwiperComponent/>
            {/* slide2        */}
            <SwiperComponent/>
            {/* slide3 */}
            <SwiperComponent/>
        </Swiper>

        <View style={[marginPosition(0,27,30,27)]}>
        <ButtonComponent onPress={() => navigation.navigate('LoginScreen')} title={"Get Started"}/>

        </View>


    </SafeAreaView>
  )
}
