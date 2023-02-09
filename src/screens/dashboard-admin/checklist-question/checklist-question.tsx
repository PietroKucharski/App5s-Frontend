import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Select from '../../../components/select/select'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { getChecklists, getQuestions } from '../../../services/auth';

export default function ChecklistQuestion() {
    const [checklistID, setChecklistId] = useState();
    
    const [questionID, setQuestionID] = useState();

    async function getChecklist() {
      const response = await getChecklists()
      setChecklistId(response.data)
    }

    async function getQuestion() {

        const response = await getQuestions();

        for(let i = 0; i < response.data.length; i++) {
            setQuestionID(response.data[i].question) // Retorna as perguntas
        }

        setQuestionID(response.data) // Retorna um array de objetos de todas as informações das perguntas
    }

    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
                <Select options={checklistID} onChangeSelect={(id) => alert(id)} value='Selecione um checklist'>

                </Select>
            </View>

        </LinearGradient>
    )
}