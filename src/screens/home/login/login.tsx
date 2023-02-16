import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../../contexts/Auth';
import { VStack, ScrollView, Button, Text, Input, KeyboardAvoidingView  } from 'native-base'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useAuth();
  
  async function login() {
    const response = await handleSignIn(email, password);
    return response;
  }
  
  return (
    <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} className='w-full flex-1'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} justifyContent={'center'}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
          <Text fontSize={30} textAlign={'center'} marginTop={15} marginBottom={5} fontWeight={700}>KRAH BRASIL</Text>
          
          <VStack style={styles.containerLogin}>
            <TextInput placeholder='Email do usuário' style={styles.textInput} onChangeText={(text) => setEmail(text)} autoCapitalize='none'/>
            <Ionicons name='people' size={18} style={styles.iconUser}/>

            <TextInput secureTextEntry={true} placeholder='Código do cracha' style={styles.textInput} onChangeText={(text) => setPassword(text)}/>
            <Ionicons name='key' size={18} style={styles.iconPassowrd}/>

            <TouchableOpacity style={styles.btnLogin} onPress={login}>
              <Text style={styles.textBtn}>LOGAR</Text>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}