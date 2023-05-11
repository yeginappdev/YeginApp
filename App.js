import React from 'react';
import Routes from './navigation/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;