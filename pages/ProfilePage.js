import { StyleSheet, View, Text, Image, ScrollView , KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import BottomMenu from "../components/BottomMenu"
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import GoBackButton from "../components/GoBack";

const ProfilePage = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP); // lock the screen to portrait mode by default

    return () => {
      ScreenOrientation.unlockAsync(); // unlock the screen orientation when the component is unmounted
    };
  }, []);
  return(
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
      <GoBackButton />
        <View style={styles.content}>
        <Text style={[styles.title, { marginTop: 16 }]}>Мой профиль</Text>
          <View style={styles.avatarContainer}>
            {/* Add your avatar image here */}
          </View>
          <Text style={styles.name}>John Doe</Text>
        </View>
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
  avatarContainer: {
    width: 160,
    height: 160,
    borderRadius: 30,
    backgroundColor: 'lightgray',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfilePage;

