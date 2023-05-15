import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';
import ButtonRow from '../components/ButtonRow';
import SearchField from '../components/SearchBar';
import BottomMenu from '../components/BottomMenu';
import BottomSheet from '../components/Filters';
import productsData from '../data/productsData';

const MainPage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    getFavoriteProducts();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const getFavoriteProducts = async () => {
    try {
      const storedFavoriteProducts = await AsyncStorage.getItem('favoriteProducts');
      if (storedFavoriteProducts) {
        setFavoriteCards(JSON.parse(storedFavoriteProducts));
      }
    } catch (error) {
      console.log('Error retrieving favorite products:', error);
    }
  };

  const handleToggleFavorite = async (product) => {
    const { id } = product;

    let updatedFavoriteCards;
    if (favoriteCards.some((card) => card.id === id)) {
      // Remove the product from the favoriteCards array
      updatedFavoriteCards = favoriteCards.filter((card) => card.id !== id);
    } else {
      // Add the product to the favoriteCards array
      updatedFavoriteCards = [...favoriteCards, product];
    }

    // Update the stored favorite products in AsyncStorage
    try {
      await AsyncStorage.setItem('favoriteProducts', JSON.stringify(updatedFavoriteCards));
      setFavoriteCards(updatedFavoriteCards);
    } catch (error) {
      console.log('Error storing favorite products:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.container}>
        <View>
          <SearchField />
        </View>
        <View>
          <ButtonRow />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Все объявления:</Text>
          <TouchableOpacity onPress={openBottomSheet} style={{ backgroundColor:'#7FE3A7', 
                                                                        borderRadius: 50,
                                                                        alignItems: 'center',
                                                                        padding:'2%'}}>
        <Text style={{ fontSize:12}}>ФИЛЬТРЫ</Text>
      </TouchableOpacity>
      <BottomSheet isVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
        </View>
          <ScrollView>
            {productsData.map((product) => (
            <View style={styles.containerCard} key={product.id}>
              <ProductCard
                product={product}
                isFavorite={favoriteCards.some((card) => card.id === product.id)}
                onPressFavorite={handleToggleFavorite} // Pass the function reference directly
                isActive={favoriteCards.some((card) => card.id === product.id)}
                onPressRemove={handleToggleFavorite} // Pass the function reference directly
              />
            </View>
              ))}
          </ScrollView>
        <BottomMenu />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerCard: {
    marginBottom: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '5%',
  },
  text: {
    fontSize: 20,
  },
});

export default MainPage;