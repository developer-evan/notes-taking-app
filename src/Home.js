import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { FlashList } from '@shopify/flash-list';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('notes').onSnapshot((querySnapshot) => {
      const newNotes = [];
      querySnapshot.forEach((doc) => {
        const { note, title } = doc.data();
        newNotes.push({ note, title, id: doc.id });
      });
      setNotes(newNotes);
    });

    return () => unsubscribe(); // Clean up the snapshot listener when component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={notes}
        numColumns={1}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.notesView}>
            <Pressable onPress={() => navigation.navigate('Detail', { item })}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteDescription}>{item.note}</Text>
            </Pressable>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NoteAdd')}>
        <Entypo name="plus" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#daefda',
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
  button: {
    position: 'absolute',
    bottom: 60,
    right: 20, // Adjusted the position of the button
    backgroundColor: '#4a8fe7',
    borderRadius: 50,
    padding: 10,
    elevation: 7,
  },
});
