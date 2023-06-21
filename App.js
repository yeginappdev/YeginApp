import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore'; // updated import statement
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './navigation/routes';

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
