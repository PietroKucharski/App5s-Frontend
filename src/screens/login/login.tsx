import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import axios from 'axios';
import AuthContext from '../../context/auth';

const url = 'http://192.168.100.183:3000/'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed } = useContext(AuthContext)

  async function login() {
    return axios({
      baseURL: url + 'auth/login',
      method: "POST",
      timeout: 1000,
      data: {
        password,
        email
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      AsyncStorage.setItem('token', JSON.stringify(response));
    }).catch((error) => {
      return {
        error
      }
    })
  }
  
  return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={styles.containerImage}  resizeMode='contain' source={require('../images/LogoKrah.png')}/>
      <Text style={styles.titleLabel}>KRAH BRASIL</Text>

      <View style={styles.containerLogin}>
        <Text style={styles.textInputLabel}>Email do usuário</Text>
        <TextInput placeholder='Email do usuário'  style={styles.textInput} onChangeText={(text) => setEmail(text)} autoCapitalize='none'/>
        <Ionicons name='people' size={18} style={styles.iconUser}/>

        <Text style={styles.textInputLabel}>Número do cracha</Text>
        <TextInput secureTextEntry={true} placeholder='Código do cracha' style={styles.textInput} onChangeText={(text) => setPassword(text)}/>
        <Ionicons name='key' size={18} style={styles.iconPassowrd}/>

        <TouchableOpacity style={styles.btnLogin} onPress={login}>
          <Text style={styles.textBtn}>LOGAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <StatusBar style="auto" />
  </KeyboardAvoidingView>
  );
}