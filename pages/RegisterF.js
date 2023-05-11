import { StyleSheet, View, Text, Image, ScrollView , KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import RegisterForm from "../components/RegisterForm";
import GoBackButton from "../components/GoBack";
import ImgHolder from "../components/LogImageHolder";
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';

const CarrotImg = require("../assets/img/iconWelcomeKukuruza.png");

const RegisterF = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP); // lock the screen to portrait mode by default

    return () => {
      ScreenOrientation.unlockAsync(); // unlock the screen orientation when the component is unmounted
    };
  }, []);
  return(
    <KeyboardAvoidingView style={styles.container}>
    <ScrollView>
    <View style={styles.container}>
      <GoBackButton />

      <View style={styles.loginButtonContainer}>
                <Text style={styles.textBefore}>Добро пожаловать!</Text>
                <ImgHolder image={CarrotImg} />
      </View>

      <RegisterForm />
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default RegisterF;

