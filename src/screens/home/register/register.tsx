import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import axios from 'axios';

const url = 'http://192.168.100.183:3000/'

export default function Register() {
    const [name, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function cadastroUsuario() {
      return axios({
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
      }).then((response) => {

      }).catch((error) => {
        return error
      })
    }

    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Image style={styles.containerImage}  resizeMode='contain' source={require('../images/LogoKrah.png')}/> */}
        <Text style={styles.titleLabel}>Faça o cadastro da sua conta</Text>
        
        <View style={styles.containerLogin}>
          <Text style={styles.textInputLabel}>Nome de usuário</Text>
          <TextInput placeholder='Nome do usuário' style={styles.textInput} onChangeText={(text) => setUser(text)}/>
          
          <Text style={styles.textInputLabel}>Email do usuário</Text>
          <TextInput placeholder='Email do usuário' style={styles.textInput} onChangeText={(text) => setEmail(text)} autoCapitalize='none'/>
          
          <Text style={styles.textInputLabel}>Número do cracha</Text>
          <TextInput secureTextEntry={true} placeholder='Código do cracha' style={styles.textInput} onChangeText={(text) => setPassword(text)} autoCapitalize='none'/>
          
          <TouchableOpacity style={styles.btnCadastro} onPress={cadastroUsuario}>
            <Text style={styles.textBtn}>CADASTRO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </KeyboardAvoidingView>
  );
}

