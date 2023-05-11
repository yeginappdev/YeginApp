import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const ButtonWithIcon = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#FFB968',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginTop: 6,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
});

export default ButtonWithIcon;