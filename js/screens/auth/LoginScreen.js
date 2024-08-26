import { View, Text,StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { bgColor, borderColor, borderWidth, flex, fontSize, heightValue, margin, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
import { TextComponent ,ScreenViewComponent, ButtonComponent} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Apple, carLogo, Facebook, Google } from '../../constants/links'
import { OtherLoginComponent } from '../../components/view/OtherLoginComponent'

export const LoginScreen = ({navigation}) => {
  return (
    <ScrollView style={[flex(1),styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
      <View style={[flex(1)]}>
        <Icon name="arrow-left" size={20} onPress={() => navigation.navigate('StarterPage')} style={[styles.black,paddingPoistion(50,0,30,30),marginPosition(30,0,0,0)]}/>
        <View style={[styles.allCenter,padding(0,20,0)]}>
          <Image
          source={ carLogo }
          style={[{height:170,width:170}]}
          />
        </View>

        <TextComponent style={[styles.selfCenter]} fontWeight={800} size={40} title={"Let's you in"}/>

        <View style={[paddingPoistion(40,0,0,0)]}>
          <OtherLoginComponent

          // icon
          source={Facebook}
          heightValue={30}
          widthValue={30}

          style={[margin(0,0,20)]}
          title={"Continue with Facebook"}
          />
          <OtherLoginComponent

          // icon
          source={Google}
          heightValue={30}
          widthValue={30}
          
          style={[margin(0,15,20)]}
          title={"Continue with Google"}
          />
          <OtherLoginComponent

          // icon
          source={Apple}
          heightValue={30}
          widthValue={30}

          style={[margin(0,0,20)]}
          title={"Continue with Apple"}
          />

          <View style={[styles.row,styles.allCenter,margin(0,30,30)]}>

            <View style={[flex(1),borderWidth(0.4),styles.border_black_100]}></View>

            <View>
              <TextComponent size={18} fontWeight={700} style={[padding(0,0,13),styles.black_600]} title={"or"}/>
            </View>

            <View style={[flex(1),borderWidth(0.4),styles.border_black_100]}></View>

          </View>

          <View style={[marginPosition(0,27,30,27)]}>
            <ButtonComponent onPress={() => navigation.navigate('LoginScreenPage')} title={"Sign in with password"}/>

          </View>

          {/* <ButtonComponent textColor={'#ffffff'} onPress={() => navigation.navigate('LoginScreenPage')} fontWeight={600} size={18} style={[{width:'90%'},radius(50),padding(0,17,0),marginPosition(0,0,25,20),styles.bgBlack]} title={"Sign in with password"}/> */}

          <Text style={[styles.selfCenter,styles.black_300,styles.fontWeight600]}>
            Don't have an account?
            <Text onPress={() => navigation.navigate('SignupScreen')} style={[styles.fontWeight700,styles.black]}> Sign up</Text>
          </Text>


        </View>
      </View>
    </ScrollView>
  )
}
