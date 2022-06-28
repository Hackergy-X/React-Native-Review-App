import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { globalstyles } from '../styles/global';

function About() {
  return (
    <View style={globalstyles.container}>
      <View style={styles.qq}>
        <Text style={globalstyles.titleText}>About Screen</Text>
      </View>
      <View style={styles.qq1}>
        <Text style={globalstyles.titleText}>This is the First App in React Native, and I'm 
          so happy to make it.
          Thank you.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qq: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  qq1: {
    padding: 5,
    marginBottom: 10,
    alignItems: 'center'
  }
});

export default About;