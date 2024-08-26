// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import { DashboardScreen } from '../screens/dashboard/Dashboard'
// import { OrdersScreen } from '../screens/bottomtabs/orders'
// import { WalletScreen } from '../screens/bottomtabs/wallet'
// import { InboxScreen } from '../screens/bottomtabs/inbox'
// import { ProfileScreen } from '../screens/bottomtabs/profile'
// import { Colors } from '../styles/Colors'
// import Icon from 'react-native-vector-icons/FontAwesome6'
// import Feather from 'react-native-vector-icons/Feather'
// import Ant from 'react-native-vector-icons/AntDesign'
// import { margin, padding, styles } from '../styles/Styles'



// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     return(
//         <Tab.Navigator
//         screenOptions={{
//             headerShown: false,
//             tabBarActiveTintColor:Colors.black,
//             tabBarInactiveTintColor:Colors.gray2,
//             tabBarStyle:{
//                 backgroundColor:Colors.white,
//                 paddingVertical:10,
//                 paddingHorizontal:10,
//                 height:60,
//             },
//             tabBarLabelStyle:{
//                 fontWeight:'700'
//             }
//         }}
//         >
//             <Tab.Screen name={'Home'} component={DashboardScreen}
//             options={{
//                 tabBarIcon:({color,size}) => (
//                     <Icon name='house' color={color} size={size}/>
//                 )
//             }}
//             />
//             <Tab.Screen name={'Orders'} component={OrdersScreen}
//             options={{
//                 tabBarIcon:({color,size}) => (
//                     <Feather name='shopping-cart' color={color} size={size}/>
//                 )
//             }}
//             />
//             <Tab.Screen name={'Inbox'} component={InboxScreen}
//             options={{
//                 tabBarIcon:({color,size}) => (
//                     <Ant name='message1' color={color} size={size}/>
//                 )
//             }}
//             />
//             <Tab.Screen name={'Wallet'} component={WalletScreen}
//             options={{
//                 tabBarIcon:({color,size}) => (
//                     <Ant name='wallet' color={color} size={size}/>
//                 )
//             }}
//             />
//             <Tab.Screen name={'Profile'} component={ProfileScreen}
//             options={{
//                 tabBarIcon:({color,size}) => (
//                     <Feather name='user' color={color} size={size}/>
//                 )
//             }}
//             />
//         </Tab.Navigator>
//     );
// }

// export default TabNavigator;




import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import { Colors } from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather'
import Ant from 'react-native-vector-icons/AntDesign'
import { margin, padding, styles } from '../styles/Styles'
import {Home} from '../screens/dashboard/shop/Home'
import {Bag} from '../screens/dashboard/shop/Bag'
import {Profile} from '../screens/dashboard/shop/Profile'
import {Shop} from '../screens/dashboard/shop/Shop'



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:Colors.blue,
            tabBarInactiveTintColor:Colors.black,
            tabBarStyle:{
                backgroundColor:Colors.white,
                paddingVertical:5,
                paddingHorizontal:10,
                height:50,
            },
            tabBarLabelStyle:{
                fontWeight:'700',
                fontSize:11,
                letterSpacing:2
            }
        }}
        >
            <Tab.Screen name={'HOME'} component={Home}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='home' color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name={'SHOP'} component={Shop}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='shopping-cart' color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name={'BAG'} component={Bag}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='shopping-bag' color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name={'PROFILE'} component={Profile}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='user' color={color} size={size}/>
                )
            }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;

