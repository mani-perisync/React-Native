import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { borderWidth, flex, heightValue, margin, marginPosition, padding, radius, styles, widthValue } from '../../styles/Styles'
import AntDesign from "react-native-vector-icons/AntDesign"
import { TextComponent } from './TextComponent'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/userReducer/dashBoardCarModels'

export const CarModelsComponent = ({data})=> {

    const {dashBoardCarModels} = useSelector((state) =>state.user.dashBoardCarModels)
    console.log("heartwishlisttttt",dashBoardCarModels)


    const dispatch = useDispatch();

    const handleFavorite = (Product_Id) =>{
        dispatch(toggleFavorite({Product_Id}))
    }

  return (
    <ScrollView style={[borderWidth(0)]} showsVerticalScrollIndicator={false}>
        <View style={[marginPosition(5,0,0,7),borderWidth(0)]}>
            <FlatList
            keyExtractor={(item,index) => index.toString()}
            numColumns={2}
            data={data}
            renderItem={({item,index})=>(
                <View style={[borderWidth(0)]}>
                    <View style={[borderWidth(0),margin(0,10,10)]}>
                        <View style={[styles.positionRelative,borderWidth(0),radius(20),styles.bgGray2,styles.allCenter]}>
                            <Image 
                            source={item.Img}
                            style={[{height:heightValue(5.7),width:widthValue(2.3)},borderWidth(0),styles.borderBlack]}
                            resizeMode='contain'
                            />
                            <TouchableOpacity onPress={() => handleFavorite(item.Product_Id)} style={[styles.positionAbsolute,{top:15,right:15}]}>
                                <AntDesign size={20} style={[styles.black]} name={item.favorite? 'heart' : 'hearto'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[borderWidth(0),marginPosition(5,0,0,0)]}>
                            <TextComponent size={17} style={[styles.fontWeight700]} title={item.name}/>
                            <View style={[borderWidth(0),styles.row,{columnGap:7},styles.centerHorizontal,padding(0,5,0)]}>
                                <Image 
                                source={item.starImg}
                                style={[{height:heightValue(40),width:widthValue(25)},borderWidth(0),styles.borderBlack]}
                                resizeMode='contain'
                                />
                                <TextComponent size={13} style={[styles.black_500,styles.fontWeight700]} title={item.Rating}/>
                                <View style={[{height:'55%',width:1.5},styles.bgBlack_200]}></View>
                                <View style={[styles.bgBlack_100,radius(5)]}>
                                    <TextComponent style={[padding(0,4,10)]} size={11} title={item.Condition}/>
                                </View>
                            </View>
                            <TextComponent style={[styles.fontWeight700]} title={item.Rate}/>
                        </View>

                    </View>
                    
                </View>

            )}
            />
        </View>
    </ScrollView>
  )
}
