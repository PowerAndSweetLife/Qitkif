import React, {useState, useRef} from 'react';
import {
  Alert,
  Appearance,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../helpers/colors';
import {TextInput} from 'react-native-gesture-handler';
import {base_url} from '../helpers/url';
const modeApp = Appearance.getColorScheme();
function ServiceLivreur({navigation}): JSX.Element {
  const [moyen, setMoyen] = useState('');
  const [zone, setZone] = useState('');
  const [num, setNum] = useState('');
  const [zoneBubble, setZoneBubble] = useState([]);
  const zoneInputRef = useRef(null);
  const removeThis = indexToRemove => {
    const updatedZones = [...zoneBubble];
    updatedZones.splice(indexToRemove, 1);
    setZoneBubble(updatedZones);
  };
  const createBubble = b => {
    // zoneBubble.push(b);
    // setZone('');
    if (zone != '') {
      setZoneBubble(prevZones => [...prevZones, zone]);
      setZone('');
      // zoneInputRef.current.clear();
      // zoneInputRef.current.focus();
    }
  };
  const sendData = async () => {
    if (moyen === '' || zoneBubble.length === 0 || num === '') {
      Alert.alert('Attention', 'Certains champs sont obligatoires');
    } else {
      try {
        const res = await fetch(base_url('AllControllers/createLivreur'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            moyen_livraison: moyen,
            zone_intervention: zoneBubble,
            num_phone: num,
          }),
        });
        if (res.ok) {
          const resultatText = await res.text();
          const result = JSON.parse(resultatText);
          if (result.success) {
            setMoyen('');
            setZone('');
            setNum('');
            setZoneBubble([]);
            Alert.alert('Succès', 'Enregistrement avec succès');
          } else {
            setMoyen('');
            setZone('');
            setNum('');
            setZoneBubble([]);
            Alert.alert('Attention', result.error);
          }
        }
      } catch (err) {
        Alert.alert('Erreur', 'Erreur de connexion au serveur');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_entete}>
        <Image
          source={require('../assets/icons/livreur.png')}
          resizeMode="cover"
          style={styles.reformImage}
        />
        <Text style={styles.textEntete}>Vous voulez devenir livreur ?</Text>
        <Text style={styles.textSoustitre}>
          Remplissez le formulaire suivant
        </Text>
      </View>
      <View>
        <Text>Votre moyen de livraison</Text>
        <TextInput
          style={styles.inputReform}
          placeholder="ex: vélo"
          value={moyen}
          onChangeText={text => setMoyen(text)}
        />
        <Text>Votre zone d'intervention</Text>
        <TextInput
          ref={zoneInputRef}
          style={styles.inputReform}
          placeholder="ex: Abidjan"
          value={zone}
          onChangeText={text => setZone(text)}
          onSubmitEditing={() => {
            createBubble(zone);
          }}
        />
        <View style={styles.message_kely}>
          {zoneBubble.map((item, index) => (
            <View key={index} style={styles.container_contenu_message_kely}>
              <Text style={styles.contenu_message_kely}>{item}</Text>
              <Text
                onPress={() => {
                  removeThis(index);
                }}
                style={styles.x}>
                X
              </Text>
            </View>
          ))}
        </View>
        <Text>Votre numéro de téléphone</Text>
        <TextInput
          style={styles.inputReform}
          placeholder="Numero de téléphone"
          value={num}
          onChangeText={text => setNum(text)}
        />
        <Pressable
          onPress={() => {
            sendData();
          }}>
          <Text style={styles.textCenter}>Enregistrer</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: modeApp === 'dark' ? colors.dark : colors.light,
  },
  reformImage: {
    width: 60,
    height: 60,
  },
  container_entete: {
    paddingTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEntete: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 17,
  },
  inputReform: {
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  textCenter: {
    textAlign: 'center',
    backgroundColor: '#42df42',
    padding: 15,
    color: 'white',
    fontSize: 14,
  },
  message_kely: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contenu_message_kely: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
    color: 'white',
    marginRight: 5,
  },
  container_contenu_message_kely: {
    position: 'relative',
  },
  x: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    fontSize: 10,
    top: 0,
  },
});
export default ServiceLivreur;
