import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

function HomeScreen({navigation}): JSX.Element {
  return (
    <SafeAreaView>
      <Navbar />
      <Home navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
