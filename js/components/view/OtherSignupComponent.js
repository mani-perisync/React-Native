import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { borderColor, borderWidth, heightValue, paddingPoistion, radius, widthValue,  } from '../../styles/Styles'

export const OtherSignupComponent = ({source,style,heightValue,widthValue}) => {
  return (
  <TouchableOpacity style={[borderWidth(1),borderColor('rgba(0, 0, 0, 0.1)'),paddingPoistion(13,25,13,25),radius(15),style]}>
    <Image source={source} style={[{height:heightValue,width:widthValue}]}/>
  </TouchableOpacity>
  )
}
