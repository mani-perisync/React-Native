import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextComponent } from './TextComponent'
import { heightValue, widthValue,styles,borderWidth,borderColor,padding,radius,paddingPoistion, style, marginPosition } from '../../styles/Styles'

export const OtherLoginComponent = ({source,heightValue,widthValue,title,style}) => {
  return (
  <TouchableOpacity style={[styles.allCenter,styles.row,borderWidth(1),styles.border_black_100,padding(12),radius(15),style]}>
    <Image
    source={source}
    style={[{height: heightValue, width: widthValue}]}
    />
    <TextComponent style={[paddingPoistion(0,0,0,10)]} fontWeight={700} size={17} title={ title }/>
  </TouchableOpacity>
  )
}
