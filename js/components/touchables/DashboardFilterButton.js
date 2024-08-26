import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { borderWidth, heightValue, margin, marginPosition, padding, radius, styles } from '../../styles/Styles'
import { dashboardScrollData } from '../../constants/dashboardSymbol'
import { TextComponent } from '../view'

export const DashboardFilterButton = ({onPress,style,textStyle,textTitle}) => {

  return (
    <TouchableOpacity onPress={onPress} style={[{height:heightValue(23)},padding(0,0,25),styles.allCenter,styles.bgWhite,margin(0,10,5),borderWidth(2),radius(100),style]}>
        <TextComponent style={[textStyle,styles.fontWeight700]} title={textTitle}/>
    </TouchableOpacity>
  )
}
