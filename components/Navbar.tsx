import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function Navbar({navigation}): JSX.Element {
  const [userName, setUserName] = useState('Edouk');
  return (
    <View style={styles.nav}>
      <Text style={styles.textWhite}>Bonjour {userName}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Menu');
        }}>
        <FontAwesomeIcon icon={faBars} style={styles.textWhite} size={25} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 35,
    backgroundColor: '#0275d8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
});

export default Navbar;
