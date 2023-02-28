import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import { LinearGradient } from 'expo-linear-gradient';
import { createChecklistQuestions, getChecklists, getQuestions } from '../../../services/Auth';
// import Select from '../../../components/select/Select'
import { Checkbox, Select as NativeBaseSelect } from 'native-base';
import Select from '../../../components/Selected';
import { Check } from 'phosphor-react-native'


export default function ChecklistQuestion() {
    var checklists: string[] = []
    const [checklist, setChecklist] = useState<any>([])
    const [question, setQuestion] = useState();
    const [selected, setSelected] = React.useState([]);
    const [service, setService] = React.useState("");

    async function getChecklist() {
        const response = await getChecklists()
        for (let i = 0; i < response.data.length; i++) {
            checklists.push(response.data[i].name)
            setChecklist(checklists)
            
        }
        console.log(checklist)
        
        
    }

    async function getQuestion() {
        const response = await getQuestions();
        
        setQuestion(response.data)
        console.log(response.data)
    }


    async function createChecklistQuestion() {
        const response = await createChecklistQuestions(selected)
        return response
    }

    function renderItem({item}: any) {
        return (
            <Checkbox.Group colorScheme="green" onChange={setSelected} value={selected} accessibilityLabel="choose numbers">
                <Checkbox value={item.id}>
                    {item.question}
                </Checkbox>
            </Checkbox.Group>
        );
    }

    return (
        <LinearGradient colors={['#6e0000', '#f60000', '#c40000']} style={styles.container}>
            <View>
       
                
                <TouchableOpacity style={styles.button} onPress={getChecklist}>
                    <Text style={styles.textBtn}>Consultar</Text>
                </TouchableOpacity>

                <NativeBaseSelect placeholder='Escolha o checklist'  _selectedItem={{ bg: "teal.600",
                endIcon: <Check size="5" />}} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select label={checklist} value={'teste'}/>
                </NativeBaseSelect>

                <Text style={styles.textLabel}>Escolha as perguntas desejadas</Text>

                <SafeAreaView style={styles.containerSafeArea}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={question}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}/>
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