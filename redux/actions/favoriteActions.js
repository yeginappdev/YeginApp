export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (product) => ({
    type: ADD_TO_FAVORITES,
    payload: product,
});

export const removeFromFavorites = (product) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: product,
});


