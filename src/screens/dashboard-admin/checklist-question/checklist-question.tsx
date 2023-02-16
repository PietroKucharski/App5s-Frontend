import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import { LinearGradient } from 'expo-linear-gradient';
import { createChecklistQuestions, getChecklists, getQuestions } from '../../../services/Auth';
import Cards from '../../../components/cards/Card';
import Select from '../../../components/select/Select'

export default function ChecklistQuestion() {
    const [checklistId, setChecklistId] = useState();
    const [questionId, setQuestionId] = useState();

    async function getChecklist() {
      const response = await getChecklists()
      setChecklistId(response.data)
    }

    async function getQuestion() {
        const response = await getQuestions();

        for(let i = 0; i < response.data.length; i++) {
            setQuestionId(response.data[i].question)
        }

        setQuestionId(response.data)
    }

    async function createChecklistQuestion() {
        const response = await createChecklistQuestions(questionId, checklistId)
        return response
    }


    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
                <Select
                options={checklistId}
                onChangeSelect={(id: any) => setChecklistId(id)}
                value='Selecione um checklist' label='Escolha o checklist'/>
                
                <TouchableOpacity style={styles.button} onPress={getChecklist}>
                    <Text style={styles.textBtn}>Consultar</Text>
                </TouchableOpacity>

                <Text style={styles.textLabel}>Escolha as perguntas desejadas</Text>

                <SafeAreaView style={styles.containerSafeArea}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={questionId}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Cards value={item.question}></Cards>}/>
                </SafeAreaView>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.buttonSafeArea} onPress={createChecklistQuestion}>
                        <Text style={styles.textBtn}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSafeArea} onPress={getQuestion}>
                        <Text style={styles.textBtn}>Consultar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}