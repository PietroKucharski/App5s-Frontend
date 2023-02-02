import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

const url = 'http://192.168.100.209:3000/'

export default function Register() {
  const [name, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const { setAuthenticated } = useContext(AuthContext);


  async function register() {
    const response = await axios({
      baseURL: url + 'auth/register',
      method: "POST",
      timeout: 1000,
      data: {
        name,
        password,
        email
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if(response) {
      await AsyncStorage.setItem('token', JSON.stringify(response));
      // setAuthenticated(true);
      // navigation.navigate('DashboardAdmin');
    }
  }


  return (
  <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} className='w-full flex-1'>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image  resizeMode='contain' source={require('../../../images/LogoKrah.png')} style={styles.containerImage}/>
        <Text style={styles.titleLabel}>
          Faça o cadastro da sua conta
        </Text>

        <View style={styles.containerLogin}>
        <TextInput
          placeholder='Nome do usuário'
          onChangeText={(text) => 
          setUser(text)}
          style={styles.textInput}/>
          
          <TextInput
          placeholder='Email do usuário'
          onChangeText={(text) => setEmail(text)}
          autoCapitalize='none'
          style={styles.textInput}/>
          
          <TextInput
          secureTextEntry={true}
          placeholder='Código do cracha'
          onChangeText={(text) => setPassword(text)}
          autoCapitalize='none'
          style={styles.textInput}/>
                  
          <TouchableOpacity
          onPress={register}
          style={styles.btnCadastro}>
            <Text className='text-center text-xl'>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    <StatusBar style="auto"/>
    </LinearGradient>
  );
}

