import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function ChecklistConsulta() {

    async function getChecklists() {
    }

    function renderItem({item}) { 
        return(
          <TouchableOpacity style={styles.containerListCards}>
              <Text>{item.nome}</Text>
          </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Image style={styles.containerImage}  resizeMode='contain' source={require('../images/LogoKrah.png')}/>
            <View style={styles.containerLbl}>
                <Text style={styles.textLbl}>Consulta de Checklist</Text>

                <SafeAreaView style={styles.containerSafeArea}>
                    <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(element) => element.id} renderItem={renderItem}/>
                </SafeAreaView>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.botao} onPress={getChecklists}>
                        <Text style={styles.textBtn}>Consultar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar/>  
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao:{
    width: 150,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  containerSafeArea: {
    alignItems: 'center',
    height: 400,
    borderWidth: 0.5,
    width: 350,
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerLbl: {
    alignItems: 'center',
    paddingTop: 20,
  },
  textLbl: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textBtn:{
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '900',
    fontSize: 24,
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 350,
    paddingTop: 20
  },
  containerImage: {
    alignItems: 'center',
    width: 300,
    height: 146,
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 40
  },
  containerListCards: {
    justifyContent: 'center',
    backgroundColor: 'gray',
    height: 60,
    width: 310,
    alignItems: "center",
    borderRadius: 5
  },
});