import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoBackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  }

  return (
 
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles.button}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </View>
        <Text style={styles.navText}>Назад</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:35,
    marginLeft: 10,
    alignItems: 'center',

  },
  button: {
    backgroundColor: '#7FE3A7',
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    paddingLeft:10, 
  }
});

export default GoBackButton;