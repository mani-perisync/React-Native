import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { marginPosition, opacity, styles } from '../../styles/Styles'

export const ProfileHeader = ({name})=> {
  return (
    <View style={[styles.row,styles.spaceBetween,marginPosition(40,0,0,0)]}>
        <TouchableOpacity>
            <FontAwesome6 name={name? 'angle-left' : ''} style={[styles.black,opacity(0.8)]} size={16}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome name='search' style={[styles.black,opacity(0.7)]} size={16}/>
        </TouchableOpacity>
    </View>
  )
}
