import React, { useState } from 'react';
import { Text, StatusBar, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { createAreas } from '../../../services/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export default function Area() {
    const [areaDescription, setAreaDescription] = useState('')
  
    async function createArea() {
        const response = await createAreas(areaDescription)
        return response
    }
    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
                <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
                <View style={styles.containerLbl}>
                    <Text style={styles.textLbl}>Faça o cadastro da area</Text>

                    <TextInput placeholder='Digite o nome da area' style={styles.textInput} onChangeText={(text) => setAreaDescription(text)}/>

                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.botao} onPress={createArea}>
                            <Text style={styles.textBtn}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar/>
            </View>
        </LinearGradient>
    );
}

