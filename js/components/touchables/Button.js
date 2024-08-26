// import React, { useState } from "react";
// import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
// import { buttonColor, fontSize, marginPosition, opacity, padding, radius, styles, textColor } from "../../styles/Styles";

// export const ButtonComponent = ({title,size,fontWeight,onPress, loading, center, disabled, style,textColor,backgroundColor}) => {
//     const [darkMode, setDarkMode] = useState(false)

//     return(
//         <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonColor(darkMode), padding(10, 10, 20), radius(center ? 100: 6), center && styles.selfCenter, styles.allCenter, disabled && opacity(0.5), style]}>
//             {loading ? <View style={[styles.row]}>
//                 <Text style={[{fontWeight: fontWeight},marginPosition(0,10), styles.white,]}>Loading</Text>
//                 <ActivityIndicator/>
//             </View> : <Text style={[{color:textColor}, {fontWeight: fontWeight}, fontSize(size?size:18)]}>{title}</Text>}
//         </TouchableOpacity>
//     )
// }


import React, { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { buttonColor, fontSize, marginPosition, opacity, padding, radius, styles, widthValue } from "../../styles/Styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const ButtonComponent = ({title, onPress, loading, center, disabled,size,color,widthValue, style}) => {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonColor(darkMode),{width:widthValue ? widthValue : '100%'},styles.bgBlack, padding(10, 15, 20), radius(center ? radius: 100), center && styles.selfCenter, styles.allCenter, disabled && opacity(0.5), style]}>
            {loading ? <View style={[styles.row]}>
                <Text style={[marginPosition(0,10), styles.white,]}>Loading</Text>
                <ActivityIndicator/>
            </View> : <Text style={[{color: color ? color : Colors.white}, {fontWeight: "600"}, fontSize(size? size : 18)]}>{title}</Text>}
        </TouchableOpacity>
    )
}




