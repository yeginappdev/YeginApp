import { combineReducers } from "redux";
import favoriteReducer from './favoritesReducer';

export default combineReducers({
  favorite: favoriteReducer
});
