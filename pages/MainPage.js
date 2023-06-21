import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import ProductCard from '../components/ProductCard';
import ButtonRow from '../components/ButtonRow';
import SearchField from '../components/SearchBar';
import BottomMenu from '../components/BottomMenu';
import BottomSheet from '../components/Filters';
import productsData from '../data/productsData';

import { getFavoriteProducts, handleToggleFavorite } from '../utils/favorites';  // AsyncStorage operations moved to a separate utility file

const MainPage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    loadFavoriteProducts();

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

  const loadFavoriteProducts = async () => {
    try {
      const favorites = await getFavoriteProducts();
      setFavoriteCards(favorites);
    } catch (error) {
      console.log('Error retrieving favorite products:', error);
      // Here you can add additional error handling
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.container}>
        <SearchField />
        <ButtonRow />
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Все объявления:</Text>
          <TouchableOpacity onPress={openBottomSheet} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>ФИЛЬТРЫ</Text>
          </TouchableOpacity>
        </View>
        <BottomSheet isVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
        <ScrollView>
          {productsData.map((product) => (
            <View style={styles.cardContainer} key={product.id}>
              <ProductCard
                product={product}
                isFavorite={favoriteCards.some((card) => card.id === product.id)}
                onPressFavorite={() => handleToggleFavorite(product, favoriteCards, setFavoriteCards)}
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
  cardContainer: {
    marginBottom: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
    marginBottom: '5%',
  },
  text: {
    fontSize: 20,
  },
  filterButton: {
    backgroundColor:'#7FE3A7', 
    borderRadius: 50,
    alignItems: 'center',
    padding: '2%',
  },
  filterButtonText: {
    fontSize:12,
  },
});

export default MainPage;
