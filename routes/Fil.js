import * as React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Button from './Button';

export default function Home({ navigation }) {
return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button style={styles.button} onPress={() => navigation.navigate('Button')}>
            <Text>Bouton</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('Fil')}>
            <Text>Fils</Text>
        </Button>
    </View>
);
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    },
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' }
});
