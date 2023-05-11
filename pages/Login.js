import { StyleSheet, View, Text, ScrollView , KeyboardAvoidingView} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';

import LoginForm from "../components/LoginForm";
import GoBackButton from "../components/GoBack";
import ImgHolder from "../components/LogImageHolder";

const FriendsImg = require("../assets/img/friends.png");

const LoginPage = () => {
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
                <Text style={styles.textBefore}>Мы рады видеть Вас снова!</Text>
                <ImgHolder image={FriendsImg} />
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

