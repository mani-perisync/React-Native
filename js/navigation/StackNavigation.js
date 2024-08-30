import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Non Auth Screens
// import { LoginScreen } from '../screens/auth/login/Login';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SplashScreen } from '../screens/Splash/SplashScreen';
import { WelcomePage } from '../screens/Splash/WelcomePage';
import { StarterPage } from '../screens/auth/StarterPage';
import { SignupScreen } from '../screens/auth/SignupScreen';
import { ProfileFill } from '../screens/auth/ProfileFill';
import { LoginScreenPage } from '../screens/auth/LoginScreenpage';
import { CreatePin } from '../screens/auth/CreatePin';
import { AddFingerprint } from '../screens/auth/AddFingerprint';
import { ForgetPassword } from '../screens/auth/ForgetPassword';
import { Success } from '../screens/auth/Success';




import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'


// Auth Screens
import { useSelector ,useDispatch} from 'react-redux';
import { setIsLoggedIn } from '../redux/authReducer/IsloggedIn';
import TabNavigator from './TabNavigator';
import { Notification } from '../screens/dashboard/Notification';
import { TopModels } from '../screens/dashboard/TopModels';
import { Wishlist } from '../screens/dashboard/Wishlist';


import { TextComponent } from '../components';
import { margin, marginPosition, opacity, styles } from '../styles/Styles';


const Stack = createNativeStackNavigator();

export const StackNavigation = ()=> {
    // const dispatch = useDispatch()
    const { at } = useSelector(state => state.auth.user)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn.isLoggedIn)
    console.log("isLoggedIn",isLoggedIn)
    // dispatch(setIsLoggedIn(false))
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='SplashScreen'
        >
            {!isLoggedIn ?
                // Non Auths
                <Stack.Group>
                    <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                    <Stack.Screen name='WelcomePage' component={WelcomePage}/>
                    <Stack.Screen name='StarterPage' component={StarterPage}/>
                    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                    <Stack.Screen name='LoginScreenPage' component={LoginScreenPage}/>
                    <Stack.Screen name='SignupScreen' component={SignupScreen}/>
                    <Stack.Screen name='ProfileFill' component={ProfileFill}/>
                    <Stack.Screen name='CreatePin' component={CreatePin}/>
                    <Stack.Screen name='AddFingerprint' component={AddFingerprint}/>
                    <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
                    <Stack.Screen name='Success' component={Success}/>

                </Stack.Group> :
                // Auth
                <Stack.Group>
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                    {/* <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="TopModels" component={TopModels}/>
                    <Stack.Screen name="Wishlist" component={Wishlist}/> */}


                </Stack.Group>
            }
        </Stack.Navigator>
    );
}