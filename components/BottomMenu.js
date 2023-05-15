import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleNavigateToMainPage = () => {
    navigation.navigate('Mainpage');
  };

  const handleNavigateToFavorites = () => {
    navigation.navigate('FavoritesPage');
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('ProfilePage');
  };

  const isFavoriteActive = route.name === 'FavoritesPage';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          isFavoriteActive && styles.activeTab,
        ]}
        onPress={handleNavigateToFavorites}
      >
        <Ionicons name="heart" size={30} color={isFavoriteActive ? 'red' : '#000'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeTab} onPress={handleNavigateToMainPage}>
        <Ionicons name="home-outline" size={40} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleNavigateToProfile}>
        <Ionicons name="person" size={26} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FBE0B3',
    height: '9%',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  homeTab: {
    backgroundColor: '#7FE3A7',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    marginBottom: 10,
  },
   tab: {
    paddingBottom:'5%',
    justifyContent: 'center',
  },
  activeTab: {
    color: 'red',
  },
});

export default BottomMenu;