import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const ActionBarImage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/heart_logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 15,
    }
});