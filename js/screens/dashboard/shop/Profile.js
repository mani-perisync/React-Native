import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenViewComponent, TextComponent } from '../../../components'
import { borderWidth, flex, heightValue, margin, marginPosition, opacity, radius, styles, widthValue } from '../../../styles/Styles'
import { ProfileHeader } from '../../../components/view/ProfileHeader'
import { ProfilePhoto } from '../../../constants/links'

export const Profile =()=> {
  return (
    <ScreenViewComponent style={[styles.bgWhite]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        {/* header */}
        <View style={[flex(0.5),marginPosition(20,15,0,15)]}>
            <ProfileHeader/>
        </View>

        <View style={[flex(1.3),{rowGap:10},marginPosition(20,15,0,15)]}>
            <View>
               <TextComponent size={35} style={[styles.fontWeight700]} title={'My profile'} /> 
            </View>
            <View style={[styles.row,{columnGap:8},styles.centerHorizontal]}>
                <View style={[borderWidth(0),radius(100)]}>
                    <Image style={[{height:heightValue(14),width:widthValue(7)},radius(100)]} source={ProfilePhoto} />

                </View>
                <View>
                    <TextComponent title={'Rezia Banks'} size={19} style={[styles.fontWeight700,opacity(0.8)]}/>
                    <TextComponent title={'reziabanks@gmail.com'} style={[styles.fontWeight700,styles.black,opacity(0.3)]}/>
                </View>
            </View>
        </View>

        <View style={[flex(4.9),styles.row]}>
            <View>

            </View>
        </View>

    </ScreenViewComponent>
  )
}





// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export const Profile = ()=> {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   )
// }

