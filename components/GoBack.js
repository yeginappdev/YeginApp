import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoBackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  }

  return (
    
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Icon name="chevron-back" size={24} color="#fff" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#7FE3A7',
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 20,
    marginTop: 60,
  },
  icon: {
    marginLeft: 1,
  },
});

export default GoBackButton;