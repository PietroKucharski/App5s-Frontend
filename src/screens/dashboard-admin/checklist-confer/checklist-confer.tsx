import React, { useEffect, useState } from 'react';
import { Text, StatusBar, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { getChecklists } from '../../../services/Auth';
import Cards from '../../../components/cards/Card';

export default function ChecklistConfer() {
  const [data, setData] = useState();


  async function getChecklist() {
    const response = await getChecklists()
    setData(response.data)
  }

  return (
    <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
      <View>
        <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
        <View style={styles.containerLbl}>
          <Text style={styles.textLbl}>Consulta de Checklist</Text>

          <SafeAreaView style={styles.containerSafeArea}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={data} 
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => <Cards value={item.name}></Cards>}/>
          </SafeAreaView>

          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.botao} onPress={getChecklist}>
              <Text style={styles.textBtn}>Consultar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar/>  
      </View>
    </LinearGradient>
  );
}