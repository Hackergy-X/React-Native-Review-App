import React from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import globalstyles from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonComp from './ButtonComp';


const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    years: yup.string().required(),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5'
    , (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});



function ReviewForm(props) {
  return (
    <View style={styles.container}>
        <Formik
            initialValues={{title: '', years: '', rating: ''}}
            validationSchema={ReviewSchema}
            onSubmit={(values) => {
                props.addReview(values);
            }}
        >
        {({handleChange, handleSubmit, values, errors, handleBlur, touched }) => (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Review title'
                    onChangeText={handleChange('title')}
                    value={values.title}
                    onBlur={handleBlur('title')}
                />
                <Text style={styles.errorText}>{touched.title && errors.title}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Review years'
                    onChangeText={handleChange('years')}
                    value={values.years}
                    onBlur={handleBlur('years')}
                />
                <Text style={styles.errorText}>{touched.years && errors.years}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Rating (1-5)'
                    onChangeText={handleChange('rating')}
                    value={values.rating}
                    keyboardType='numeric'
                    onBlur={handleBlur('rating')}
                />
                <Text style={styles.errorText}>{touched.rating && errors.rating}</Text>
                    {/* <Button  title="submit" color='maroon' onPress={handleSubmit} /> */}
                    <ButtonComp text={'submit'} submit={handleSubmit} />
            </View>
        )}
        </Formik>
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
  errorText: {
    margin: 10,
    color: 'red',
  }
});

export default ReviewForm;