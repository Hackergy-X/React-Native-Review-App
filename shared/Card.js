import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 8,
    },
    cardContent: {
        marginHorizontal: 19,
        marginVertical: 20,
    }
});

export default Card;