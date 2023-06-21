import { createStore } from 'redux';
import rootReducer from '../reducers'; // import the rootReducer

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
