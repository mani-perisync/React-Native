import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { opacity, paddingPoistion, styles } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextComponent } from './TextComponent'
import { useNavigation } from '@react-navigation/native'

export const DashboardHeaderComponent = ({title,name,CustomIcons}) => {
    const navigation = useNavigation();
    
    const backPage = () => {
        navigation.goBack()
    }

  return (
    <View style={[paddingPoistion(30,25,20,25),styles.row,styles.centerHorizontal,styles.spaceBetween]}>
        <View style={[styles.row,{columnGap:20},styles.centerHorizontal]}>
            <TouchableOpacity>
                <Icon name="arrow-left" onPress={backPage} size={19} style={[styles.black,opacity(0.9)]}/>
            </TouchableOpacity>
            <TextComponent size={20} style={[styles.fontWeight700,opacity(0.9)]} title={title}/>
        </View>
        <View>
            {CustomIcons}
            {/* <MCIcon size={25} style={[styles.black,opacity(0.7)]} name='dots-horizontal-circle-outline'/> */}

        </View>
    </View>
  )
}
