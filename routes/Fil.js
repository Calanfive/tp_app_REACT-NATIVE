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
    const [lastSerialNumberValue, setLastSerialNumberValue] = useState("impair")
    
    const res = useMemo(() => {
        const nbFilsRouges = colors.filter(couleur => couleur === 'red').length
        const nbFilsBleus = colors.filter(couleur => couleur === 'blue').length
        const nbFilsJaunes = colors.filter(couleur => couleur === 'yellow').length
        const nbFilsNoirs = colors.filter(couleur => couleur === 'black').length
    
        if(colors.length === 3){
            if (nbFilsRouges === 0) {
                return 'couper le 2ème fil'
            } else if (nbFilsBleus> 1) {
                return 'couper le dernier fil bleu'
            } else {
                return 'couper le dernier fil'
            }
        }
        
        if(colors.length === 4){

            if ((colors[3] === 'yellow' && nbFilsRouges === 0) || nbFilsBleus >= 1) {
                return 'couper le 1er fil'
            } else if (nbFilsRouges > 1 && lastSerialNumberValue === 'impair') {
                return 'couper le fil rouge'
            } else if (nbFilsJaunes > 1) {
                return 'couper le dernier fil'
            } else {
                return 'couper le 2ème fil'
            }
        }

        if(colors.length === 5){
            if (colors[4] === 'black' && lastSerialNumberValue === 'impair') {
                return 'couper le 4ème fil'
            } else if (nbFilsRouges === 1 && nbFilsJaunes > 1) {
                return 'couper le 1er fil'
            } else if (nbFilsNoirs === 0) {
                return 'couper le 2ème fil'
            }
        }

        return 'result'

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
                <View style={styles.color} >
                    <View style={{ width: 250, height: 20, backgroundColor: color}}></View>
                    <View style={styles.colorList} >
                        {items.map((color, keyColor) => 
                            <TouchableOpacity 
                                key={keyColor} 
                                style={{ width: 50, height: 50, backgroundColor: color}} 
                                onPress={() => handleChangeFilColor(k, color)} 
                            />
                        )}
                    </View>
                </View>
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
        justifyContent: 'center'
    },

    color: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    colorList: {
        display: 'flex',
        flexDirection: 'row'
    }
});
