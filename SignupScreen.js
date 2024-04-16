import React,{useState} from 'react';
import { View, Text,TouchableOpacity,Image, Button, StyleSheet } from 'react-native';
import FormInput from '../components/Forminput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({navigation}) => {
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    return (
        <View style= {styles.container}>
        <Text style={styles.text}> Create an Account </Text>
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
        placeholderText='Password'
        iconType="lock"
        secureTextEntry={true}
        />
        <FormInput 
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText='Confirm Password'
        iconType="lock"
        secureTextEntry={true}
        />
        <FormButton buttonTitle="Sign Up"
        onPress={()=>alert('Sign Up clicked')}
        />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}> By registering, you confirm that you accept our</Text>
          <TouchableOpacity onPress={() =>alert('terms clicked')}><Text style={[styles.color_textPrivate,{color:"#e88832"}]}> Terms of Service </Text></TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate,{color:"#e88832"}]}> Privacy Policy</Text>
        </View>
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
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}> Have an account? Sign in </Text>
        </TouchableOpacity>
        </View> 
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: { 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
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
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });