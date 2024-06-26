import React,{useState} from 'react';
import { View, Text,TouchableOpacity,Image, Button, StyleSheet } from 'react-native';
import FormInput from '../components/Forminput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    return (
        <View style= {styles.container}>
            <Image 
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
        <Text style={styles.text}> CorpComms </Text>
        <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText='Email'
        iconType="user"
        keyboardType='email-address'
        autoCapitalize="none"
        autoCorrect={false}
        />
        <FormInput 
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText='Email'
        iconType="lock"
        secureTextEntry={true}
        />
        <FormButton buttonTitle="Sign In"
        onPress={()=>alert('Sign in clicked')}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}> Forgot Password? </Text>
        </TouchableOpacity>
        <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navButtonText}> Dont have an account? Create Here </Text>
        </TouchableOpacity>
        </View> 
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: { 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });