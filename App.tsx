import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {SafeAreaView, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from './screens/NotificationsScreen';
import NousContacterScreen from './screens/NousContacterScreen';
import ParrainerScreen from './screens/ParrainerScreen';
import PartagerScreen from './screens/PartagerScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import MenuScreen from './screens/MenuScreen';
import TrouverLivreurScreen from './screens/TrouverLivreurScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();
const customHeaderTitleStyle = {
  fontSize: 14,
  color: 'white',
};
const customHeaderStyle = {
  backgroundColor: '#3498db',
  height: 40,
};
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
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="NousContacter"
          component={NousContacterScreen}
          options={{
            headerShown: true,
            headerTitle: 'Nous contacter',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Parrainer"
          component={ParrainerScreen}
          options={{
            headerShown: true,
            headerTitle: 'Parrainage',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Partager"
          component={PartagerScreen}
          options={{
            headerShown: true,
            headerTitle: 'Partager',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Promotions"
          component={PromotionsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Promotions',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: true,
            headerTitle: 'Menu',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="trouverLivreur"
          component={TrouverLivreurScreen}
          options={{
            headerShown: true,
            headerTitle: 'Livreur',
            headerTitleStyle: customHeaderTitleStyle,
            headerStyle: customHeaderStyle,
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
