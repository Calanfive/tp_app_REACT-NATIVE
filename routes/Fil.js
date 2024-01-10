import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Fil() {
return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text></Text>
        </View>

    </SafeAreaView>
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
