import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, 
  TouchableWithoutFeedback, Keyboard,
  TouchableOpacity, Modal} from 'react-native';
import { globalstyles } from '../styles/global';
import Card from '../shared/Card';
import { Ionicons } from '@expo/vector-icons'; 
import ReviewForm from './ReviewForm';

function Home({ navigation }) {
  
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {title: 'Volvo', rating: 5, years: '1967', key: '1'},
    {title: 'Mercedes', rating: 4, years: '1980', key: '2'},
    {title: 'BMW', rating: 3, years: '1995', key: '3'},
  ]);

  const addReview = (review) => {
      review.key = Math.random().toString();
      setReviews((currentReviews) => {
        return [review,...currentReviews];
      })
      setModalOpen(false);
  }

  return (
    <View style={styles.container}>

        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>

                  <ReviewForm addReview={addReview} />
                  
                  <Ionicons style={styles.close} name="close-circle-outline"
                    onPress={() => setModalOpen(false)}
                  size={34} color="black" />


              </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Ionicons style={styles.add} name="add-circle-outline" size={34} 
          onPress={() => setModalOpen(true)}
        color="black" />

        <FlatList
        data={reviews}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('ReviewDetails', item);
            }}>
                <Card>
                  <Text>{ item.title }</Text>
                </Card>
            </TouchableOpacity>
        )}
         />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        padding: 24,
    },
  input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,
  },
  add: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  close: {
    marginBottom: 10,
    alignSelf: 'center',
  }
});

export default Home;