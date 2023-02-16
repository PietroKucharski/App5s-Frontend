import React, { useState } from 'react';
import { Text, StatusBar, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { createChecklists } from '../../../services/Auth';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Styles';

export default function CheckList() {
    const [checklistName, setChecklistName] = useState('')
  
    async function createChecklist() {
        const response = await createChecklists(checklistName)
        return response
    }
    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
                <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
                <View style={styles.containerLbl}>
                    <Text style={styles.textLbl}>Faça o cadastro de um checklist</Text>

                    <TextInput placeholder='Digite o nome do checklist' style={styles.textInput} onChangeText={(text) => setChecklistName(text)}/>

                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.botao} onPress={createChecklist}>
                            <Text style={styles.textBtn}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar/>
            </View>
        </LinearGradient>
    );
}

