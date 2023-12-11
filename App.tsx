import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from './screens/NotificationsScreen';
import NousContacterScreen from './screens/NousContacterScreen';
import ParrainerScreen from './screens/ParrainerScreen';
import PartagerScreen from './screens/PartagerScreen';
import PromotionsScreen from './screens/PromotionsScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Notifications',
          }}
        />
        <Stack.Screen
          name="NousContacter"
          component={NousContacterScreen}
          options={{
            headerShown: true,
            headerTitle: 'Nous contacter',
          }}
        />
        <Stack.Screen
          name="Parrainer"
          component={ParrainerScreen}
          options={{
            headerShown: true,
            headerTitle: 'Parrainer',
          }}
        />
        <Stack.Screen
          name="Partager"
          component={PartagerScreen}
          options={{
            headerShown: true,
            headerTitle: 'Partager',
          }}
        />
        <Stack.Screen
          name="Promotions"
          component={PromotionsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Promotions',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
