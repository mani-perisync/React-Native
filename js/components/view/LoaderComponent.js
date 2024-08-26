import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { flex, marginPosition } from "../../styles/Styles";

export const LoaderCompnent = ({style, color,size}) => {
    return(
        <View style={[flex(1), style]}>
            <ActivityIndicator size={size} color={color}/>
        </View>
    )
}
