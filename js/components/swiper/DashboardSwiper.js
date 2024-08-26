import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { borderWidth, flex, heightValue, paddingPoistion, styles, widthValue } from '../../styles/Styles'
import { TextComponent } from '../view'
import { carImg } from '../../constants/links'

export const DashboardSwiper = ()=> {
  return (
    <View style={[styles.row,styles.centerHorizontal,{width:'100%',height:'100%'},paddingPoistion(0,30,20,10),borderWidth(0)]}>
        <View style={[flex(1),borderWidth(0),styles.borderBlue,{rowGap:10},paddingPoistion(0,0,0,20)]}>
            <TextComponent size={35} style={[styles.fontWeight700]} title={'20%'}/>
            <TextComponent size={20} style={[styles.fontWeight700]} title={'Week Deals!'}/>
            <TextComponent size={13} style={[styles.fontWeight700,styles.black_700]} title={'Geat a new car discount, only valid this week'}/>
        </View>
        <View style={[flex(1.4),borderWidth(0),styles.borderGreen]}>
            <Image
            source={carImg}
            resizeMode="contain"
            style={[{height:heightValue(2),width:widthValue(2)}]}
            />
        </View>
    </View>
  )
}

