import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleRight';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const windowHeight = Dimensions.get('window').height;

const MONEY_CURRENCY = 'FCFA';
function Home({navigation}): JSX.Element {
  const [totalVente, setTotalVente] = useState(0);
  const [totalAchat, setToalAchat] = useState(0);
  const goToScreen = val => {
    navigation.navigate(val);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Pressable style={[styles.btnMenu, styles.color1]}>
            <Text style={styles.textInfoBtn}>Vos ventes</Text>
            <Text style={styles.textInfoBtn}>
              {totalVente} {MONEY_CURRENCY}
            </Text>
          </Pressable>
          <Pressable style={[styles.btnMenu, styles.color2]}>
            <Text style={styles.textInfoBtn}>Vos achats</Text>
            <Text style={styles.textInfoBtn}>
              {totalAchat} {MONEY_CURRENCY}
            </Text>
          </Pressable>
        </View>
        <View style={styles.subContainer2}>
          <Text style={styles.textCenter}>Quoi de neuf ?</Text>
        </View>
        <View style={styles.subContainer3}>
          <Pressable
            style={[styles.btnMenuSection2, styles.color2, styles.radius]}>
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              color="#42df42"
              size={20}
            />
            <Text style={styles.textInfoBtnSection2}> Vendre</Text>
          </Pressable>
          <Pressable
            style={[styles.btnMenuSection2, styles.color2, styles.radius]}>
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              color="#0275d8"
              size={20}
            />
            <Text style={styles.textInfoBtnSection2}> Acheter</Text>
          </Pressable>
        </View>
        <View style={styles.subContainer4}></View>
      </View>
      <View style={styles.bottomMenu}>
        <Pressable
          style={styles.pressableMenu}
          onPress={() => {
            goToScreen('Parrainer');
          }}>
          <Image
            source={require('../assets/icons/cadeau.png')}
            style={styles.reformImage}
            resizeMode="cover"
          />
          <Text style={styles.textMenu}>Parrainer</Text>
        </Pressable>
        <Pressable
          style={styles.pressableMenu}
          onPress={() => {
            goToScreen('NousContacter');
          }}>
          <Image
            source={require('../assets/icons/bavardage.png')}
            style={styles.reformImage}
            resizeMode="cover"
          />
          <Text style={styles.textMenu}>Nous contacter</Text>
        </Pressable>
        <Pressable
          style={styles.pressableMenu}
          onPress={() => {
            goToScreen('Notifications');
          }}>
          <Image
            source={require('../assets/icons/cloche.png')}
            style={styles.reformImage}
            resizeMode="cover"
          />
          <Text style={styles.textMenu}>Notifications</Text>
        </Pressable>
        <Pressable
          style={styles.pressableMenu}
          onPress={() => {
            goToScreen('Promotions');
          }}>
          <Image
            source={require('../assets/icons/promotion.png')}
            style={styles.reformImage}
            resizeMode="cover"
          />
          <Text style={styles.textMenu}>Promotions</Text>
        </Pressable>
        <Pressable
          style={styles.pressableMenu}
          onPress={() => {
            goToScreen('Partager');
          }}>
          <Image
            source={require('../assets/icons/partage.png')}
            style={styles.reformImage}
            resizeMode="cover"
          />
          <Text style={styles.textMenu}>Partager</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  subContainer1: {
    width: '100%',
    marginTop: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer2: {
    height: 25,
  },
  subContainer3: {
    height: 50,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCenter: {
    margin: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnMenu: {
    width: '48%',
    height: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  btnMenuSection2: {
    width: '48%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  color1: {
    borderColor: '#42df42',
  },
  color2: {
    borderColor: '#0275d8',
  },
  textInfoBtn: {
    textAlign: 'center',
    fontSize: 12,
  },
  textInfoBtnSection2: {
    borderRadius: 15,
    fontSize: 12,
  },
  radius: {
    borderRadius: 5,
  },
  bottomMenu: {
    height: 65,
    paddingLeft: 20,
    paddingRight: 20,
    bottom: -(windowHeight - (windowHeight - 75) - 64),
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    position: 'relative',
    flexDirection: 'row',
  },
  reformImage: {
    width: 20,
    height: 20,
  },
  textMenu: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  pressableMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 65,
  },
  subContainer4: {
    marginTop: 10,
    height: windowHeight - 310,
    backgroundColor: 'red',
  },
});

export default Home;
