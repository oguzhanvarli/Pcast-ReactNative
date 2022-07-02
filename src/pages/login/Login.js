import { Text, View, SafeAreaView, ImageBackground, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import Button from '../../components/Button/Button'
import { Formik, ErrorMessage, Form } from 'formik'
import { baseService } from '../../network/services/baseService'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import * as Yup from 'yup';

export default function Login({ navigation }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (values) => {
    setLoading(true)
    try {
      const response = await baseService.post('/login', values)
      if (response == 401) {
        Alert.alert('Hata', 'Email veya Parola Hatalı')
        console.log('Hata')
        setLoading(false)
      }
      else{
        setData(response)
        setLoading(false)
        const value = JSON.stringify(response.access_token)
        AsyncStorage.setItem('access_token', value)
        navigation.navigate('Browse')
      }
        
      
    } catch (error) {
      console.log(error.response)
      setError(error.message)
      setLoading(false)
    }
  }

  const validate = Yup.object({
    email: Yup.string().required('Email boş bırakılamaz.'),
    password: Yup.string().required('Parola boş bırakılamaz.')
  })

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.mainImage} source={require('../../img/mainImg.png')}>
          <View style={styles.mainPage}>
            <Image style={styles.logo} source={require('../../img/logo.png')} />
            <Text style={styles.loginText}>Episodic series of digital audio</Text>
            <Formik
              initialValues={{ email: '', password: '' }} onSubmit={handleLogin}
              validationSchema={validate} >
              {({ handleSubmit, handleChange, values, errors,touched }) => (
                  <Form>
                  <TextInput style={styles.inputEmail} placeholder='E-mail address' value={values.email} onChange={handleChange('email')} />
                  <Feather style={styles.emailIcon} name="mail" size={18} />
                  {errors.email && touched.password ? <Text style={styles.error1}>{errors.email}</Text> : null}
                  <TextInput secureTextEntry={true} style={styles.inputPassword} placeholder='Password' onChange={handleChange('password')} />
                  <FontAwesome5 style={styles.passIcon} name="key" size={18} />
                  {errors.password && touched.password ? <Text style={styles.error2}>{errors.password}</Text> : null}
                  <Button text='Login' onPress={handleSubmit} loading={loading} />
                  <ErrorMessage name='password' style={styles.error} />
                  </Form>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  )
}
