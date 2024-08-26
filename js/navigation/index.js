import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./StackNavigation";
import TabNavigator from "./TabNavigator";
// Navigation Types

export const AppNavigationContainer = () => {
    return(
        <NavigationContainer>
            <StackNavigation/>
            {/* <TabNavigator/> */}
        </NavigationContainer>
    )
}