import { StyleSheet, View, Text, Image, ScrollView , KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import BottomMenu from "../components/BottomMenu"
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import CityDropdown from '../components/CityDropdown';
const Profile = () => {
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
        <Text>Мой профиль</Text>
        </View>
        <CityDropdown />
      </ScrollView>
    <BottomMenu />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Profile;

