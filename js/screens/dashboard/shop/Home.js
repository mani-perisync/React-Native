import { ImageBackground, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { BackgroundImg } from '../../../constants/links'
import { borderWidth, flex, heightValue, lineHeight, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles } from '../../../styles/Styles'
import { TextComponent } from '../../../components'

export const Home = ()=> {
  return (
    <ScrollView >

      <View>
        <ImageBackground
        source={BackgroundImg}
        resizeMode="cover"
        style={[{height:heightValue(2),width:'100%'},styles.positionRelative]}
        >
          <View style={[styles.positionAbsolute,{bottom:25,left:15,rowGap:10}]}>

            <View style={[lineHeight(20)]}>
              <TextComponent size={15} style={[styles.white,styles.fontWeight700,padding(0)]} title={'Holiday'}/>
              <TextComponent size={15} style={[styles.white,styles.fontWeight700]} title={'Sale'}/>
            </View>
            <TouchableOpacity style={[borderWidth(2),radius(100),styles.borderBlack,styles.selfStart]}>
              <TextComponent size={13} style={[padding(0,8,25),styles.fontWeight500,styles.black]} title={'SHOP'}/>
            </TouchableOpacity>
          </View>

        </ImageBackground>


      </View>
      
    </ScrollView>
  )
}
