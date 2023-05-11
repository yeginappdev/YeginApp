import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/Login';
import WelcomePage from '../pages/Welcome';
import RegisterF from '../pages/RegisterF';
import RegisterT from '../pages/RegisterT';
import MainPage from '../pages/MainPage';
import FavoritesPage from '../pages/FavoritesPage';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mainpage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registerf" component={RegisterF} />
        <Stack.Screen name="Registert" component={RegisterT} />
        <Stack.Screen name="Mainpage">
          {(props) => (
            <MainPage {...props} favoriteCards={favoriteCards} setFavoriteCards={setFavoriteCards} />
          )}
        </Stack.Screen>
        <Stack.Screen name="FavoritesPage">
          {(props) => (
            <FavoritesPage {...props} favoriteCards={favoriteCards} setFavoriteCards={setFavoriteCards} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
