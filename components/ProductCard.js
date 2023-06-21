import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { removeFromFavorites, addToFavorites } from '../redux/actions/favoriteActions';

const ProductCard = ({
  product,
  favorites,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { id, name, date, image } = product;

  const isFavorite = favorites.some(favorite => favorite.id === id);
  
  const handlePress = () => {
    if (isFavorite) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

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

// This function is used to access data from the store
const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

// This function is used to dispatch actions to the store
const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (product) => dispatch(addToFavorites(product)),
  removeFromFavorites: (product) => dispatch(removeFromFavorites(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);