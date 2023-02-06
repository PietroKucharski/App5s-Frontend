import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

export default function DashboardAdmin() {

  async function handleLogout() {
  }

 return (
  <View style={styles.container}>
    <Text style={styles.textLbl}>O que você deseja?</Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.containerScroll}>

      <TouchableOpacity style={styles.btnOpcao}>
        <Text style={styles.textBtn}>Realizar auditoria</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Permissao')}>
        <Text style={styles.textBtn}>Tipo de acesso do usuário</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textBtn}>Cadastro de usuário</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Checklist')}>
        <Text style={styles.textBtn}>Cadastro de checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Consulta Checklist')}>
        <Text style={styles.textBtn}>Consulta de checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Perguntas')}>
        <Text style={styles.textBtn}>Cadastro de perguntas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpcao} onPress={() => navigation.navigate('Consulta Perguntas')}>
        <Text style={styles.textBtn}>Consulta de perguntas</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.btnOpcao}>
        <Text style={styles.textBtn}>Cadastro áreas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOpcao} onPress={handleLogout}> 
        <Text style={styles.textBtn}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>

    <View style={styles.container}>
      <Text>Informações sobre última auditoria</Text>
    </View>

    <StatusBar style="auto" />
  </View>
  );
}