import {View, Text, Pressable, StyleSheet, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';

function Parrainer({navigation}): JSX.Element {
  const [code, setCode] = useState('vbjsi9x');
  const copyToClipBoard = () => {
    const textCode = code;
    Alert.alert('Succès', 'Le code est copié avec succès !');
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.reformImage}
          source={require('../assets/icons/cadeau.png')}
          resizeMode="cover"
        />
        <Text style={styles.colorBlue}> Code de parrainage</Text>
      </View>
      <View style={styles.container2}>
        <Pressable style={styles.codeContainer}>
          <Text style={styles.textColorBlue}>{code}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            copyToClipBoard();
          }}
          style={styles.btn}>
          <Text style={styles.btnTxt}>COPIER MON CODE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  container2: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeContainer: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0275d8',
    borderRadius: 10,
  },
  textColorBlue: {
    color: '#0275d8',
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#0275d8',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  btnTxt: {
    color: 'white',
  },
  reformImage: {
    width: 25,
    height: 25,
  },
  colorBlue: {
    color: '#0275d8',
    fontSize: 12,
  },
});

export default Parrainer;
