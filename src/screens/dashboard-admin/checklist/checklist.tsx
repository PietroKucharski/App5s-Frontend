import React, { useState } from 'react';
import { Text, StatusBar, View, TouchableOpacity, Image, TextInput } from 'react-native';
// import CheckBox from '../components/checkBox';
import { createChecklists } from '../../../services/auth';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function CheckList() {
    const [checklistName, setChecklistName] = useState('')
  
    async function createChecklist() {
        const response = await createChecklists(checklistName)
        console.log(response.data)
        return response
    }
    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
                <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
                <View style={styles.containerLbl}>
                    <Text style={styles.textLbl}>Checklist</Text>

                    <TextInput placeholder='Checklist' style={styles.textInput} onChangeText={(text) => setChecklistName(text)}/>

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

