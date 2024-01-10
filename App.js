import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './router/Button';
import Home from './router/Home';
import Fil from './router/Fil';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Fil" component={Fil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  navigButton: {
    backgroundColor: '',
  }

});
