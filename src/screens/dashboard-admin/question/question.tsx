import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { createQuestions } from '../../../services/auth';

export default function Question() {
  const [question, setQuestion] = useState('');

  async function createQuestion() {
    const response = await createQuestions(question);
    return response
  }

 return (
    <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
        <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
        <Text style={styles.textLblPermission}>Faça o cadastro da pergunta</Text>

        <TextInput placeholder='Digite a pergunta' style={styles.textInput} onChangeText={(text) => setQuestion(text)}/>
    
        <TouchableOpacity style={styles.btnCadastro} onPress={createQuestion}>
            <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </LinearGradient>

  );
}

