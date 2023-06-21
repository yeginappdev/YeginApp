import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ButtonWithIcon from './ButtonWithIcon';

const ButtonRow = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                alwaysBounceHorizontal={true}>
                
      <View style={styles.container}>
        <ButtonWithIcon
          icon={require('../assets/icons/iconGrape.png')}
          text="ЯГОДЫ"
          onPress={() => console.log('Button 1 pressed')}
        />
        <ButtonWithIcon
          icon={require('../assets/icons/iconApple.png')}
          text="ФРУКТЫ"
          onPress={() => console.log('Button 2 pressed')}
        />
        <ButtonWithIcon
          icon={require('../assets/icons/iconOnion.png')}
          text="ОВОЩИ"
          onPress={() => console.log('Button 3 pressed')}
        />
        <ButtonWithIcon
          icon={require('../assets/icons/iconOver.png')}
          text="ДРУГОЕ"
          onPress={() => console.log('Button 4 pressed')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom:65,
  },
});

export default ButtonRow;