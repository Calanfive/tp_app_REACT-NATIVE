import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  // const [toto, setToto] = useState('toto')

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Appuyer puis relâcher aussitôt si :</Text>
      <View style={styles.box}>
        <Text>Nb de piles &gt; 1 + "Exploser"</Text>
      </View>
      <View style={styles.box}>
        <Text>Nb de piles &gt; + "FRK"</Text>
      </View> 
      <View style={styles.box}>
        <View style={[styles.square, {backgroundColor: 'red'}]}></View>
      </View>

      <View style={styles.box}>
        <Text style={styles.texto}>Sinon maintenir :</Text>
      </View>
      <View style={styles.box}>
        <View style={[styles.rectangle, {backgroundColor: 'yellow'}]}></View>
        <Text> = 5</Text>
      </View>
      <View style={styles.box}>
        <View style={[styles.rectangle, {backgroundColor: 'blue'}]}></View>
        <Text> = 4</Text>
      </View>
      <View style={styles.box}>
        <Text>autres couleurs = 1</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1
  },
  
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  rectangle: {
    width: 15,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black"
  },
  square: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: "black",
  }, 
  texto: {
    marginTop: 60,
    fontWeight: "bold",
  }
  
});
