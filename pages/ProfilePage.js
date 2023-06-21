import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React from 'react';
import { useScreenOrientationLock } from '../hooks/useScreenOrientationLock'; // Use custom hook for managing screen orientation

import GoBackButton from "../components/GoBack";
import BottomMenu from "../components/BottomMenu";

const ProfilePage = () => {
  useScreenOrientationLock('PORTRAIT_UP'); // Use custom hook here

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <GoBackButton />
        <View style={styles.content}>
          <Text style={styles.title}>Мой профиль</Text>
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
    marginTop: 16,
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
