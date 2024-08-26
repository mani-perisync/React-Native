
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { starterPageImg } from '../../constants/links'
import { flex, styles,heightValue,widthValue, borderWidth, opacity, position,padding, paddingPoistion, radius, marginPosition, buttonColor, bgColor, fontSize, margin } from '../../styles/Styles'
import { Colors } from '../../styles/Colors'
import { TextComponent } from '../view'

export const SwiperComponent = () => {
  return (
    <View style={[styles.spaceBetweenVertical,styles.allCenter,flex(1),paddingPoistion(50,0,0,0)]}>
        <View style={[styles.spaceBetweenVertical,styles.allCenter,flex(1),paddingPoistion(50,0,0,0)]}>
            <View style={[styles.allCenter,marginPosition(100,0,0,0)]}>
                <Image
                    source={ starterPageImg }
                    style={[{height:heightValue(2.8),width:widthValue(1.4),bottom:90,zIndex:2}]}
                    resizeMode='contain'
                />
                <View style={[borderWidth(0.5,0,0.5,2),opacity(0.7),styles.black,{justifyContent:'center',height:60,width:60,bottom:160,borderRadius:100,transform: [{ scaleX:6.1 }]}]}>
                </View>


                <View style={[{bottom:145,height:40,width:40,borderRadius:100},styles.bgBlack,styles.positionAbsolute,styles.allCenter]}>
                    <TextComponent size={10} color={Colors.white} title={"360°"}/>
                </View>

            </View>
            <View style={[{width:'100%'},paddingPoistion(0,20,50,20),styles.selfEnd]}>
                <TextComponent style={[styles.fontWeight800]} textCenter={30} size={40} title={"The best car in your hands with Carea"}/>
            </View>
        </View>  
    </View>     

  )
}
