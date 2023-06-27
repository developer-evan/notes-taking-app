import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View ,StatusBar} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
      {/* <View style={{backgroundColor:'red', padding:18}}>
      <Text style={styles.title}>Note Taking</Text>
      
      </View>
      <View style={{backgroundColor:'skyblue', flex:1, padding:18}}>
        <Text></Text>
      </View> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerTitle: () => <Header name="Add Notes"/>,
            headerStyle:{
              backgroundColor: '#4a8fe7',
              height:60,
            }}
          }
          />            
          <Stack.Screen
          component={NoteAdd}
          name="NoteAdd"
          options={{
            headerTitle: () => <Header name="Add Notes"/>,
            headerStyle:{
              backgroundColor: '#4a8fe7',
              height:60,
            }}
          }
          />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
 
