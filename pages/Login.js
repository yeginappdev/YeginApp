import { StyleSheet, View, Text, ScrollView , KeyboardAvoidingView } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';

// Import custom components
import LoginForm from "../components/LoginForm";
import GoBackButton from "../components/GoBack";
import ImgHolder from "../components/LogImageHolder";
// Import assets
const WelcomeBackImage = require("../assets/img/friends.png");

// Component definition
const LoginPage = () => {
  // Lock screen to portrait mode on component mount
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    // Unlock the screen orientation when the component is unmounted
    return () => {
      ScreenOrientation.unlockAsync(); 
    };
  }, []);

  // Render component
  return(
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <GoBackButton />
          <View style={styles.loginButtonContainer}>
            <Text style={styles.textBefore}>Мы рады видеть Вас снова!</Text>
            <ImgHolder image={WelcomeBackImage} />
          </View>
          <LoginForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  textBefore: {
    flex: 1,
    textAlign:'left',
    fontSize: 25,
  },
});

export default LoginPage;

