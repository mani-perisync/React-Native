import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { flex, marginPosition, opacity } from '../../styles/Styles'
import { CarModelsComponent, DashboardHeaderComponent } from '../../components'
import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'


export const Wishlist = () => {
    const wishlist = useSelector((state) => state.user.dashBoardCarModels.wishlist)
    console.log('====================================');
    console.log("wishlisthdshd",wishlist);
    console.log('====================================');


  return (
    <View style={[flex(1),styles.bgWhiteSmoke]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[marginPosition(40,0,0,0)]}>
            <DashboardHeaderComponent title={"Wishlist"}
            CustomIcons={(
                <Feather size={25} style={[styles.black,opacity(0.7)]} name='search'/>
            )}
            />
        </View>

        {/* Data */}
        <CarModelsComponent data={wishlist}/>

    </View>
  )
}

const styles = StyleSheet.create({})