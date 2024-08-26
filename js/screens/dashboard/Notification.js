import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { borderWidth, flex, heightValue, marginPosition, opacity, padding, paddingPoistion, radius, styles, widthValue, zIndex } from '../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScreenViewComponent, TextComponent } from '../../components'
import { NotificationsData } from '../../constants/NotificationsData'
import { DashboardHeaderComponent } from '../../components/view/DashboardHeaderComponent'

export const Notification = ({navigation}) => {

  return (
    <View style={[flex(1),styles.bgWhiteSmoke]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[flex(1),marginPosition(40,0,0,0)]}>
            {/* heading */}
            <DashboardHeaderComponent 
            title={"Notifications"} 
            CustomIcons={(
                <MCIcon size={25} style={[styles.black,opacity(0.7)]} name='dots-horizontal-circle-outline'/>
            )}
            />
            {/* <View style={[paddingPoistion(30,25,20,25),styles.row,styles.centerHorizontal,styles.spaceBetween]}>
                <View style={[styles.row,{columnGap:20},styles.centerHorizontal]}>
                    <Icon name="arrow-left" size={19} style={[styles.black,opacity(0.9)]}/>
                    <TextComponent size={20} style={[styles.fontWeight700,opacity(0.9)]} title={"Notification"}/>
                </View>
                <View>
                    <MCIcon size={25} style={[styles.black,opacity(0.7)]} name='dots-horizontal-circle-outline'/>
                </View>
            </View> */}

            <ScrollView style={[marginPosition(0,0,0,0)]}>
                <FlatList
                data={NotificationsData}
                renderItem={({item}) => (
                    <View style={[marginPosition(10,20,10,20)]}>
                        <View style={[marginPosition(0,0,10,0)]}>
                            {item.value && <TextComponent size={17} style={[styles.fontWeight700]} title={item.day}/>}
                        </View>
                        <View style={[styles.row,flex(0),borderWidth(0),radius(20),styles.bgWhite,styles.centerHorizontal,padding(0,15,20),{columnGap:20}]}>

                            <View style={[borderWidth(1),{height:heightValue(14),width:widthValue(7)},styles.allCenter,radius(100),styles.bgBlack,styles.positionRelative,zIndex(-1)]}>
                                <Image
                                source={item.img}
                                style={[{height:heightValue(18),width:widthValue(11)},styles.positionAbsolute,zIndex(1),styles.bgWhite]}
                                resizeMode="stretch"
                                />
                            </View>
                            <View style={[flex(1),borderWidth(0)]}>
                                <TextComponent size={17} style={[styles.fontWeight700]} title={item.status}/>
                                <TextComponent style={[styles.fontWeight700,styles.black_300,padding(0,7,0)]} title={item.comments}/>
                                {item.check && <TextComponent size={17} style={[borderWidth(2),styles.selfStart,paddingPoistion(10,10,7,10),radius(100),styles.fontWeight700]} title={"View Details"}/>}


                            </View>
                        </View>
                    </View>

                )}
                />
            </ScrollView>

        </View>
    </View>
  )
}
