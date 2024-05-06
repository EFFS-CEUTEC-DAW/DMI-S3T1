import React, {useState} from 'react';
import {View,Text,TextInput,Button,StyleSheet,FlatList,Alert} from 'react-native';

export const AgendaComponent = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    if (name.length < 3) {
      Alert.alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    if (phoneNumber.length < 8) {
      Alert.alert('El número debe tener al menos 8 dígitos numéricos.');
      return;
    }

    const newContact = {name, phoneNumber};
    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, marginBottom: 15, textAlign: 'center'}} >Agenda</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      <Button title="Agregar" onPress={handleAddContact} />

      <FlatList
        style={{marginTop: 15}}
        data={contacts}
        keyExtractor={contact => contact.name}
        renderItem={({item}) => (
          <View style={styles.textContainer}>
            <Text style={{fontSize: 25, marginEnd: 10}} >{item.name} |</Text>
            <Text style={{fontSize: 25, marginEnd: 10}} >{item.phoneNumber}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
