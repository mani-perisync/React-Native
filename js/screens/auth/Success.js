import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LoaderCompnent, ScreenViewComponent, TextComponent } from '../../components'
import { borderWidth, flex, margin, marginPosition, padding, radius, styles } from '../../styles/Styles'
import { AvatarIcon } from '../../constants/links'
import { Colors } from '../../styles/Colors'
import { useDispatch } from 'react-redux'


export const Success = ({navigation})=> {


    // useEffect(() => {
    //     setTimeout(() => {
    //       navigation.replace('Dashboard')
    //     },3000)
    //   }, [])

  return (
    <ScreenViewComponent backgroundColor={'rgba(83,88,97,255)'} style={[flex(1)]}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={[flex(1),borderWidth(1),styles.centerHorizontal,{backgroundColor: '#ffffff'},margin(40,200,40),radius(20)]}>
            <Image
            source={AvatarIcon}
            style={[{height:130,width:130},marginPosition(50,0,0,0)]}
            />
            <View style={[marginPosition(30,0,0,0),styles.allCenter,{gap:20}]}>
                <View>
                    <TextComponent style={[styles.textCenter]} size={25} fontWeight={'700'} title={'Congratulations!'}/>
                </View>
                <View>
                    <TextComponent color={'rgba(148,148,148,255)'} style={[styles.textCenter,padding(0,0,40)]} size={18} fontWeight={'500'} title={'Your account is ready to use. You will be reduced to the Home Page in a few seconds '}/>

                </View>
                <LoaderCompnent
                color={Colors.black}
                size={50}
                style={[marginPosition(30,0,0,0)]}
                />
            </View>
        </View>
    </ScreenViewComponent>
  )
}
