import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { FlashList } from '@shopify/flash-list';

const Home = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot((querySnapshot) => {
        const newNotes = [];
        querySnapshot.forEach((doc) => {
          const { note, title } = doc.data();
          newNotes.push({ note, title, id: doc.id });
        });
        setNotes(newNotes);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <FlashList
        data={notes}
        numColumns={1}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.notesView}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteDescription}>{item.note}</Text>
          </View>
        )}
      />
      <Button title="Add Notes" onPress={() => navigation.navigate("NoteAdd")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73fbd3',
  },
  notesView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteDescription: {
    marginTop: 5,
    fontSize: 15,
  },
});
