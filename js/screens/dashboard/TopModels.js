import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { borderColor, borderWidth, flex, heightValue, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
import { DashboardHeaderComponent } from '../../components/view/DashboardHeaderComponent'
import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import { bmwImg1, percentageLogoImg } from '../../constants/links'
import { dashboardScrollData } from '../../constants/dashboardSymbol'
import { CarModelsComponent, DashboardFilterButton, ScreenViewComponent, TextComponent } from '../../components'
import AntDesign from "react-native-vector-icons/AntDesign"

export const TopModels = () => {
    // const carModels = useSelector((state) => state.user.dashBoardCarModels.carModels);
    // console.log("tgsywgywgyghw", carModels);
    const {dashBoardCarModels} = useSelector((state) =>state.user.dashBoardCarModels)
    console.log("dhahsdahsd",dashBoardCarModels)

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterPress = (filterName) => {
      setActiveFilter(filterName)
    };


    // model select filter

    const filterModels = activeFilter === 'All' ? dashBoardCarModels : dashBoardCarModels.filter(car => car.Brand_Name === activeFilter)

    console.log("jfhdjfhejfhej",filterModels);

    
    
  return (
    <View style={[styles.bgWhiteSmoke]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[marginPosition(40,0,0,0)]}>
            {/* heading */}
            <DashboardHeaderComponent title={"Top Models"}
            CustomIcons={(
                <Feather size={25} style={[styles.black,opacity(0.7)]} name='search'/>
            )}
            />             
        </View>


        <ScrollView style={[borderWidth(0)]} horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* {dashboardScrollData.map((item,index)=>(
                <DashboardFilterButton key={index} onPress={() => handleFilterPress(item.name)} style={[activeFilter === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeFilter === item.name && styles.white]}/>
            ))} */}
            <FlatList
            horizontal
            data={dashboardScrollData}
            renderItem={({item}) => (
                <DashboardFilterButton onPress={() => handleFilterPress(item.name)} style={[activeFilter === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeFilter === item.name && styles.white]}/>
            )}
            />
        </ScrollView>



        {/* Data */}
        <CarModelsComponent data={filterModels}/>

    </View>
  )
}














// import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { borderColor, borderWidth, flex, heightValue, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles, widthValue } from '../../styles/Styles'
// import { DashboardHeaderComponent } from '../../components/view/DashboardHeaderComponent'
// import Feather from 'react-native-vector-icons/Feather'
// import { useSelector } from 'react-redux'
// import { bmwImg1, percentageLogoImg } from '../../constants/links'
// import { dashboardScrollData } from '../../constants/dashboardSymbol'
// import { CarModelsComponent, DashboardFilterButton, ScreenViewComponent, TextComponent } from '../../components'
// import AntDesign from "react-native-vector-icons/AntDesign"
// import { SafeAreaView } from 'react-native-safe-area-context'

// export const TopModels = () => {
//     // const carModels = useSelector((state) => state.user.dashBoardCarModels.carModels);
//     // console.log("tgsywgywgyghw", carModels);
//     const {dashBoardCarModels} = useSelector((state) =>state.user.dashBoardCarModels)
//     console.log("dhahsdahsd",dashBoardCarModels)

//     const [activeFilter, setActiveFilter] = useState('All');

//     const handleFilterPress = (filterName) => {
//       setActiveFilter(filterName)
//     };


//     // model select filter

//     const filterModels = activeFilter === 'All' ? dashBoardCarModels : dashBoardCarModels.filter(car => car.Brand_Name === activeFilter)

//     console.log("jfhdjfhejfhej",filterModels);

    
    
//   return (
//     <View style={[styles.bgWhiteSmoke]}>
//         <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
//         <View style={[marginPosition(40,0,0,0)]}>
//             {/* heading */}
//             <DashboardHeaderComponent title={"Top Models"}
//             CustomIcons={(
//                 <Feather size={25} style={[styles.black,opacity(0.7)]} name='search'/>
//             )}
//             />
              
//         </View>
//         <ScrollView style={[marginPosition(0,0,20,20),padding(0,10,0),borderWidth(1)]} horizontal={true} showsHorizontalScrollIndicator={false}>
//             {dashboardScrollData.map((item,index)=>(
//                 <DashboardFilterButton key={index} onPress={() => handleFilterPress(item.name)} style={[activeFilter === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeFilter === item.name && styles.white]}/>
//             ))}
//         </ScrollView>



//         {/* Data */}
//         <CarModelsComponent data={filterModels}/>
//     </View>
//   )
// }





























                {/* {carModels.map(item =>(
                                        <View style={[flex(1)]}>
                                        <View style={[borderWidth(0),margin(0,7,7)]}>
                                            <View style={[borderWidth(1),radius(20),styles.allCenter]}>
                                                <Image 
                                                source={item.Img}
                                                style={[{height:heightValue(6),width:widthValue(2.5)},borderWidth(1),styles.borderBlack]}
                                                resizeMode='contain'
                                                />
                                            </View>
                                            <View>
                                                <TextComponent title={item.name}/>
                                                <View style={[borderWidth(0)]}>
                                                    <Image 
                                                    source={item.starImg}
                                                    style={[{height:heightValue(40),width:widthValue(25)},borderWidth(1),styles.borderBlack]}
                                                    resizeMode='contain'
                                                    />
                                                </View>
                                            </View>
                
                                        </View>
                                        
                                    </View>

                ))} */}