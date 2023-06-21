import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavoriteProducts = async () => {
  const storedFavoriteProducts = await AsyncStorage.getItem('favoriteProducts');
  return storedFavoriteProducts ? JSON.parse(storedFavoriteProducts) : [];
};

export const handleToggleFavorite = async (product, favoriteCards, setFavoriteCards) => {
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
    // Here you can add additional error handling
  }
};
