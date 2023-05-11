import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import ImageViewer from "../components/LogoViewer";
import WelcImageHolder from "../components/WelcImageHolder"
import * as ScreenOrientation from 'expo-screen-orientation';

const PlaceholderImage = require('../assets/img/yeginoutlogo.jpg')
const regFMButton = require('../assets/img/iconWelcomeKukuruza.png')
const regTRButton = require('../assets/img/iconWelcomeApple.png')


function ButtonLogin() {
  const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    );
}


const WelcomePage = () => {
   useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP); // lock the screen to portrait mode by default

    return () => {
      ScreenOrientation.unlockAsync(); // unlock the screen orientation when the component is unmounted
    };
  }, []);
  return (
    
    <View style={styles.container}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />  
        <Text style={styles.textHeader}>Урожая достаточно для сбора!</Text>
        
        <View style={styles.loginButtonContainer}>  
          <ButtonLogin /> 
        </View>

       <Text style={styles.textFooter}>-или зарегистрироваться-</Text> 

      <View style={styles.registerButtonContainer}>
        <WelcImageHolder text="Как фермер" image={regFMButton} where='Registerf' />  
          <WelcImageHolder text="Как турист" image={regTRButton} where= 'Registert'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonContainer: {
    width: '80%',
  },

  registerButtonContainer: {
    paddingTop: 30,
    flexDirection: 'row',
  },

  button: { 
    position:'relative',
    height: 70,
    backgroundColor: '#7FE3A7',
    borderRadius: 20,
    paddingLeft:'32%',
    paddingRight: '32%',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize:24,
    textAlign: 'center',
  },

  textHeader: {
    paddingBottom: 30,
    textAlign:'center',
    fontSize: 30,
  },

  textFooter: {
    fontSize: 23,
    paddingTop:10,
  }

});

export default WelcomePage;



