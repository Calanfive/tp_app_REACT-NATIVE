import * as React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function Home({ navigation }) {
return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title='Button'
        style={styles.button}
        onPress={() => navigation.navigate('Button')}>
        </Button>
        <Button 
        title='Fil'
        style={styles.button}
        onPress={() => navigation.navigate('Fil')}>
        </Button>
    </View>
);
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    },
    container: { 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    }
});
 