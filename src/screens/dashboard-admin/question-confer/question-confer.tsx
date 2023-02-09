import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { getQuestions } from '../../../services/auth';
import Cards from '../../../components/cards/cards';

export default function QuestionConfer() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    async function getQuestion() {

        const response = await getQuestions();

        for(let i = 0; i < response.data.length; i++) {
            setData(response.data[i].question) // Retorna as perguntas
        }

        setData(response.data) // Retorna um array de objetos de todas as informações das perguntas
    }

    // useEffect(() => {
    //     async function loadStorageData() {
    //         const response = await getQuestion();



    //     }

    //     loadStorageData();
    // }, [2000])

    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.containerImage}  resizeMode='contain' source={require('../../../images/LogoKrah.png')}/>
                <View>
                    <Text style={styles.textLblPergunta}>Faça a consulta das perguntas</Text>
                </View>

                <SafeAreaView style={styles.questionList}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Cards value={item.question}></Cards>}/>
                </SafeAreaView>

                <TouchableOpacity style={styles.botao} onPress={getQuestion}>
                    <Text style={styles.textBtn}>Consultar</Text>
                </TouchableOpacity>
        
                <StatusBar style="auto" />
            </View>
        </LinearGradient>
    );
}