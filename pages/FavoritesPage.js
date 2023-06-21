import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductCard from '../components/ProductCard';
import BottomMenu from '../components/BottomMenu';

const FavoritesPage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const handleRemoveFavorite = async (product) => {
    const updatedFavoriteCards = favoriteCards.filter((card) => card.id !== product.id);

    try {
      await AsyncStorage.setItem('favoriteProducts', JSON.stringify(updatedFavoriteCards));
      setFavoriteCards(updatedFavoriteCards);
    } catch (error) {
      console.log('Error removing favorite product:', error);
    }
  };

  useEffect(() => {
    // Retrieve the favorite products from AsyncStorage
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

    getFavoriteProducts();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.container}>
    <Text style={styles.favTitle}>Избранные объявления:</Text>
    <ScrollView>
      <View style={styles.container}>
        {favoriteCards && favoriteCards.map((product) => (
          <ProductCard
            style={styles.containerCard}
            product={product}
            isFavorite={true}
            onPressRemove={() => handleRemoveFavorite(product)}
            key={product.id}
          />
        ))}
      </View>
    </ScrollView>
    </View>
    <BottomMenu />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '10%',
    justifyContent: 'flex-end',
  },
  favTitle: {
    paddingLeft: '5%',
    fontSize: 20,
  },
  containerCard: {
    marginBottom: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
  },
});

export default FavoritesPage;
