import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';


function ButtonComp({ submit, text }) {
  return (
        <TouchableOpacity onPress={submit}>
            <View style={styles.button}>
                    <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71'
    },
    btnText: {
       color: 'white',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 16,
       textAlign: 'center',
    }
});

export default ButtonComp;