import React, { useState, useEffect } from "react";
import { AppContainer } from "./js/AppContainer";
import { Provider } from 'react-redux';
import store, { persistor } from './js/redux/store';
import { Modal, Text, View } from "react-native"
import { PersistGate } from 'redux-persist/integration/react';
import { flex, styles } from "./js/styles/Styles";
import { TextComponent } from "./js/components";
const App = () => {
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {/* <PersistGate loading={<SplashScreen/>} persistor={persistor}> */}
                <AppContainer/>
            </PersistGate>
        </Provider>
    )
}
export default App