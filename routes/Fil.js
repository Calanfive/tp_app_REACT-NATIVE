import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const possibleColors = [
    'white',
    'red',
    'green',
    'black',
    'blue',
    'yellow'
];

const items = [
    {value: '3', label: '3 fils'},
    {value: '4', label: '4 fils'},
    {value: '5', label: '5 fils'}
];

export default function Fil() {
    const [debug, setDebug] = useState('rien')
    const [colors, setColors] = useState(['white', 'white', 'white'])
    const [lastSerialNumberValue, setLastSerialNumberValue] = useState("impair")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('3');

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
            else {
                return 'couper le 1er fil'
            }
        }
    }, [colors])

    const handleChangeFilColor = (indexNewColor, newColor) => {
        const newColors = [...colors]
        newColors[indexNewColor] = newColor
        setColors(newColors)
        setDebug('handleChangeColor: ' + indexNewColor + ', ' + newColor)
    }

    useEffect(() => {
        let newColors = []
        for (let index = 0; index < parseInt(value); index++) {
            newColors.push('blue')
        }
        setColors(newColors)
    }, [value])

    return (
    <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
        />
        
        <View>
        {colors.map((color, k) => 
            <View key={k}>
                <View style={styles.color} >
                    <Text style={styles.numfil}>{k + 1}{k === 0 ? 'er' : 'ème'} fil</Text>
                    <View 
                        style={{ 
                            width: 250,
                            height: 20,
                            backgroundColor: color,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: "black"
                        }}>
                    </View>
                    <View style={styles.colorList} >
                        {possibleColors.map((color, keyColor) => 
                            <TouchableOpacity 
                                key={keyColor} 
                                style={{ 
                                    width: 50, 
                                    height: 50, 
                                    backgroundColor: color,
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: "black"
                                }} 
                                onPress={() => handleChangeFilColor(k, color)} 
                            />
                        )}
                    </View>
                </View>
            </View>)}
            <Text style={styles.numfil}>{res}</Text>
        </View>
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
        justifyContent: 'center',
        margin: 20
    },

    colorList: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },

    numfil: {
        fontWeight: 'bold'
    }
});
