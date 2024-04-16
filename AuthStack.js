import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        // Check if 'alreadyLaunched' key exists in local storage
        const alreadyLaunched = localStorage.getItem('alreadyLaunched');
        if (!alreadyLaunched) {
            // If 'alreadyLaunched' key doesn't exist, set it to true and indicate first launch
            localStorage.setItem('alreadyLaunched', 'true');
            setIsFirstLaunch(true);
        } else {
            // If 'alreadyLaunched' key exists, indicate not first launch
            setIsFirstLaunch(false);
        }
    }, []);

    if (isFirstLaunch === null) {
        // While waiting for isFirstLaunch value to be determined, return null (render nothing)
        return null;
    } else if (isFirstLaunch) {
        // If it's the first launch, set routeName to 'Onboarding'
        routeName = 'Onboarding';
    } else {
        // If it's not the first launch, set routeName to 'Login'
        routeName = 'Login';
    }

    return (
        // Return the navigation stack based on the determined routeName
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={({navigation}) => ({
                title:'',
                headerStyle: {
                    backgroundColor:'#f9fafd',
                    shadowColor:'#f9fafd',
                    elevation:0,
                },
                headerLeft:() =>(
                    <View style={{marginLeft:10}}>
                        <FontAwesome.Button 
                        name="long-arrow-left"
                        size={25}
                        backgroundColor="#f9fafd"
                        color="#333"
                        onPress={() => navigation.navigate('Login')}
                        />

                    </View>
                ),
            })}
             />
        </Stack.Navigator>
    );
};

export default AuthStack;
