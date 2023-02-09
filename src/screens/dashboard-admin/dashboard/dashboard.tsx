import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../../contexts/auth';
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardAdmin({ navigation }) {
  const { handleSignOut } = useAuth();

  function signOut() {
    handleSignOut();
  }

 return (
  <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
      <Text style={styles.textLbl}>O que você deseja?</Text>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.containerScroll}>

        <TouchableOpacity style={styles.btnOpcao}>
          <Text style={styles.textBtn}>Realizar auditoria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Permissao')}>
          <Text style={styles.textBtn}>Tipo de acesso do usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textBtn}>Cadastro de usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Checklist')}>
          <Text style={styles.textBtn}>Cadastro de checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('ChecklistConfer')}>
          <Text style={styles.textBtn}>Consulta de checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Question')}>
          <Text style={styles.textBtn}>Cadastro de perguntas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('QuestionConfer')}>
          <Text style={styles.textBtn}>Consulta de perguntas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('ChecklistQuestion')}>
          <Text style={styles.textBtn}>Cadastro de checklist/pergunta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Area')}>
          <Text style={styles.textBtn}>Cadastro áreas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOpcao} onPress={signOut}> 
          <Text style={styles.textBtn}>Sair da conta</Text>
        </TouchableOpacity>

      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  </LinearGradient>
  );
}