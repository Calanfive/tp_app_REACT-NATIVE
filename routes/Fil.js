import * as React from 'react';
import { useState, useMemo } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

const items = [
    'white',
    'red',
    'green',
    'black',
    'blue',
    'yellow'
];

export default function Fil() {
    const [debug, setDebug] = useState('rien')
    const [colors, setColors] = useState(['white', 'white', 'white'])

    const res = useMemo(() => {
        if(colors.length === 3){
            return 'couper le 3ème fil'
        }
        if(colors[0] === 'red'){
            return 'titi'
        }
        return 'toto'
    }, [colors])

    const handleChangeFilColor = (indexNewColor, newColor) => {
        const newColors = [...colors]
        newColors[indexNewColor] = newColor
        setColors(newColors)
        setDebug('handleChangeColor: ' + indexNewColor + ', ' + newColor)
    }

    return (
    //   <DropDownPicker
    //     open={open}
    //     value={value}
    //     items={items}
    //     setOpen={setOpen}
    //     setValue={setValue}
    //   />
        <View>
            {colors.map((color, k) => 
            <View key={k}>
                <View style={{ width: 650, height: 20, backgroundColor: color}}></View>
                {items.map((color, keyColor) => 
                    <TouchableOpacity 
                        key={keyColor} 
                        style={{ width: 50, height: 50, backgroundColor: color}} 
                        onPress={() => handleChangeFilColor(k, color)}
                    />
                )}
            </View>)}
            <Text>{res}</Text>
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
