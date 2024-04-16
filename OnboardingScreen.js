import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
       <Onboarding 
       onSkip={() => navigation.replace("Login")}
       onDone={() => navigation.navigate("Login")}
       pages={[
        {
            backgroundColor: '#fff',
            image: <Image source={require('/Users/shruthiramesh/corpcomms/assets/government.png')} style={{ width: 500, height: 500 }} />,
            title: 'Speak Up',
            subtitle: 'Connect with the government',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('/Users/shruthiramesh/corpcomms/assets/people.png')} style={{ width: 500, height: 500 }}/>,
            title: 'Make Change',
            subtitle: 'Obtain effective solutions',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('/Users/shruthiramesh/corpcomms/assets/socialmedia.png')} style={{ width: 500, height: 500,}}/>,
            title: 'Be Heard',
            subtitle: 'Engage with other citizens',
        },
       ]}
       />
    );
};

export default OnboardingScreen;

  
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
});