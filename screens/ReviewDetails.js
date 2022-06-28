import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import Card from '../shared/Card';
import {globalstyles, images} from '../styles/global';


function ReviewDetails({ route }) {
  const rating = route.params.rating;
  return (
    <View style={globalstyles.container}>
    <Card>
        <Text style={globalstyles.titleText}>name: {route.params.title}</Text>
        <Text style={globalstyles.titleText}>rating: {route.params.years}</Text>
        <View style={styles.ratingStyle}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});

export default ReviewDetails;