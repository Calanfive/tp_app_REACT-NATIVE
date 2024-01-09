import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // const [toto, setToto] = useState('toto')

  return (
    <View style={styles.container}>
      <Text>Appuyer</Text>
      <View>
        <View style={styles.boxjaune}>
        </View>
        <Text>= 5</Text>
        <View style={styles.boxbleue}>
        </View>
        <Text>= 4</Text>
        <View style={styles.boxblanc}>
        </View>
        <Text>= 1</Text>
        <View style={styles.other}>
        </View>
        <Text>= 1</Text>
      </View>
      <View style={styles.rela}></View>
        <Text>Relâcher</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  boxjaune: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black",
    backgroundColor: "yellow"
  },
  boxbleue: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black",
    backgroundColor: "blue"
  },
  boxblanc: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black",
    backgroundColor: "white"
  },

});
