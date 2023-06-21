import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';

import ProductCard from '../components/ProductCard';
import ButtonRow from '../components/ButtonRow';
import SearchField from '../components/SearchBar';
import BottomMenu from '../components/BottomMenu';
import BottomSheet from '../components/Filters';
import productsData from '../data/productsData';

const MainPage = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorite.products); // Adjust this according to your state
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

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

  const handlePressFavorite = (product) => {
    const isFavorite = favoriteProducts.some((favProduct) => favProduct.id === product.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.searchContainer}>
        <SearchField />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonRow />
      </View>
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
              isFavorite={favoriteProducts.some((favProduct) => favProduct.id === product.id)}
              onPressFavorite={() => handlePressFavorite(product)}
            />
          </View>
        ))}
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
  searchContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 8,
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
