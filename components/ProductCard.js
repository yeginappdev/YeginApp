import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(state => state.favorite.favorites);
  const isFavorite = favoriteProducts.some(favProduct => favProduct.id === product.id);

  const handlePress = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const { id, name, date, image } = product;

  return (
    <View style={styles.containerListItem}>
      <Image style={styles.imageItem} source={{ uri: image }} />
      <View style={styles.textContainerItem}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>Дата: {date}</Text>
      </View>
      <View style={styles.containerFavorites}>
        <Pressable onPress={handlePress}>
          <Image
            style={styles.icoFav}
            source={isFavorite ? require('../assets/icons/favorYes.png') : require('../assets/icons/favorNo.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerListItem: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  containerFavorites: {
    position:'absolute',
    flexDirection: 'row',
    width: 164,
    height:150,
    marginLeft: 125,
    marginTop: 10,
  },
  imageItem: {
    width: 164,    
    height: 150,    
    borderRadius: 20,
  },
  icoFav: {  
    width: 28,    
    height: 28,
  },
  textContainerItem: {  
    paddingLeft: '4%',
    paddingTop: '4%',
    width: '100%',
  },
  name: {
    fontSize:16,
    marginBottom: 8,
  },
  date: {
    fontSize:10,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProductCard;
