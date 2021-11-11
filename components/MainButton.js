import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    return (<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
<View style={styles.Button}>
<Text style={styles.ButtonText}>{props.children}</Text>
</View>
    
</TouchableOpacity> )
};

const styles = StyleSheet.create({

    Button : {
        backgroundColor : Colors.primary,
        paddingVertical : 12, 
        paddingHorizontal: 22,
        borderRadius : 22,
    },
    ButtonText: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    }
});

export default MainButton;