import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/favoriteActions';

import ProductCard from '../components/ProductCard';
import BottomMenu from '../components/BottomMenu';
import GoBackButton from '../components/GoBack';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorite.favorites);

  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <GoBackButton />
      <View style={styles.container}>
        <Text style={styles.favTitle}>Избранные объявления:</Text>
        <ScrollView>
          <View style={styles.container}>
            {favoriteProducts.map((product) => (
              <View style={styles.containerCard} key={product.id}>
                <ProductCard
                  product={product}
                  isFavorite={true}
                  onPressFavorite={() => handleRemoveFavorite(product)}
                />
              </View>
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
    justifyContent: 'flex-end',
  },
  favTitle: {
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
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
