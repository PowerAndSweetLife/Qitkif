import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
const maxHeight = Dimensions.get('window').height;
const MONEY_CURRENCY = 'FCFA';

function Menu({navigation}): JSX.Element {
  const [reductionPrice, setReductionPrice] = useState(0);
  const doNavigation = nav => {
    switch (nav) {
      case 'TrouverLivreur':
        navigation.navigate('trouverLivreur');
        break;
      case 'ServiceLivreur':
        break;
      case 'Accueil':
        navigation.navigate('Home');
        break;
      case 'compte':
        break;
      case 'moyenPaiement':
        break;
      case 'historiqueTransactions':
        break;
      case 'transactions':
        break;
      case 'promotions':
        break;
      case 'code':
        break;
      case 'serviceClient':
        break;
    }
  };
  return (
    <ScrollView style={styles.scroller}>
      <View style={styles.reductionbox}>
        <Text style={styles.reductionText}>Réduction</Text>
        <Text style={styles.money}>
          {reductionPrice} {MONEY_CURRENCY}
        </Text>
        <Pressable style={styles.customBtn}>
          <Text style={styles.customBtnText}>Obtenir plus</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          doNavigation('Accueil');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/bouton-daccueil.png')}
        />
        <Text style={styles.textContainer}>{'  '}Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('compte');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/compte.png')}
        />
        <Text style={styles.textContainer}>{'  '}Mon compte</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('moyenPaiement');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/paiement-securise.png')}
        />
        <Text style={styles.textContainer}>{'  '}Moyen de paiements</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('historiqueTransactions');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/transfert-dargent.png')}
        />
        <Text style={styles.textContainer}>
          {'  '}Historique des transactions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('transactions');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/transaction.png')}
        />
        <Text style={styles.textContainer}>{'  '}Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('promotions');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/promotion.png')}
        />
        <Text style={styles.textContainer}>{'  '}Promotions et infos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('code');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/badge.png')}
        />
        <Text style={styles.textContainer}>{'  '}Utiliser un code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('TrouverLivreur');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/livreur(1).png')}
        />
        <Text style={styles.textContainer}>{'  '}Trouver un livreur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('ServiceLivreur');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/livreur.png')}
        />
        <Text style={styles.textContainer}>{'  '}Service livreur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          doNavigation('serviceClient');
        }}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/icons/service-client.png')}
        />
        <Text style={styles.textContainer}>{'  '}Service client</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 2,
    height: maxHeight - 30,
  },
  container: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
    height: 40,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 12,
  },
  image: {
    width: 25,
    height: 25,
  },
  reductionbox: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#0275d8',
  },
  reductionText: {
    fontSize: 14,
  },
  money: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  customBtn: {
    backgroundColor: '#42df42',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnText: {
    color: 'white',
  },
});

export default Menu;
