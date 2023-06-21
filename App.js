import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './navigation/routes';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
