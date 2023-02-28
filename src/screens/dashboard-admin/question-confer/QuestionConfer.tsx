
import React, { useState } from 'react';
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image, Box, FlatList } from "native-base";
import { Button } from "../../../components/Button";
import { MagnifyingGlass } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { getQuestions } from '../../../services/Auth';
import Cards from '../../../components/cards/Card';

export default function QuestionConfer() {
    const img = require('../../../images/LogoKrah.png');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    async function getQuestion() {
        const response = await getQuestions();

        for(var i = 0; i < response.data.length; i++) {
            setData(response.data[i].question) // Retorna as perguntas
        }
        setData(response.data.question) // Retorna um array de objetos de todas as informações das perguntas
        console.log(data)
    }

    function renderItem({item}: any) {
        return (
            <Box height={20} width={300}>
                <Cards value={item.question}/>
            </Box>
        );
    }


    return (
        <NativeBaseProvider>
            <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
                <VStack flex={1} px={5}>
                    <Center h='full'>

                    <Image alt='Logo Krah' source={img} size={150} mt={'50px'} mb={'50px'}/>
                    <Heading mb={'40px'}>
                        Consulta de perguntas
                    </Heading>

            
                    <FlatList data={data} renderItem={renderItem} borderWidth={1} w={350} paddingLeft={5} paddingTop={4}/>

                    <Button title="Consultar" onPress={getQuestion} leftIcon={<Icon as={<MagnifyingGlass/>} size={16} color="muted.400"/>} mt={'50px'} mb={'50px'}/>
                    </Center>
                </VStack>
            </LinearGradient>
        </NativeBaseProvider>
    );
}
