import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const GoBackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default GoBackButton;