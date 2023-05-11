import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require('../assets/icons/search.png')}
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Поиск"
        placeholderTextColor={'#000'}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 20,
    marginTop: '12%',
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});

export default SearchBar;
