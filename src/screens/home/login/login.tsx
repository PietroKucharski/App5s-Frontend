import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import AuthContext from '../../../contexts/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed, handleSignIn } = useContext(AuthContext);
  console.log(signed);

  function login() {
    handleSignIn(email, password);
  }
  
  return (
    <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} className='w-full flex-1'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
          <Text style={styles.titleLabel}>KRAH BRASIL</Text>
          
          <View style={styles.containerLogin}>
            <TextInput placeholder='Email do usuário' style={styles.textInput} onChangeText={(text) => setEmail(text)} autoCapitalize='none'/>
            <Ionicons name='people' size={18} style={styles.iconUser}/>

            <TextInput secureTextEntry={true} placeholder='Código do cracha' style={styles.textInput} onChangeText={(text) => setPassword(text)}/>
            <Ionicons name='key' size={18} style={styles.iconPassowrd}/>

            <TouchableOpacity style={styles.btnLogin} onPress={login}>
              <Text style={styles.textBtn}>LOGAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}