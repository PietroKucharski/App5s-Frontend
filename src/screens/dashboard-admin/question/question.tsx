import * as yup from 'yup'
import React from 'react';
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image, Pressable } from "native-base";
import { Button } from "../../../components/Button";
import  { Input } from '../../../components/Input';
import {  Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { ClipboardText, CheckSquare } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { createQuestions } from '../../../services/Auth';

type FormDataProps = {
    question: string
}

const questionSchema = yup.object({
    question: yup.string().required('Informe a pergunta'),
})

export default function Question() {
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(questionSchema) });
    const img = require('../../../images/LogoKrah.png');

    async function handelSubmitQuestion(data: FormDataProps) {
        const response = await createQuestions(data.question)
        return response
    }

    return (
        <NativeBaseProvider>
            <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
            <VStack flex={1} px={4}>
                <Center h='full'>
                    <Image alt='Logo Krah' source={img} size={150} mb={'50px'}/>
                    <Heading mb={'50px'}>
                        Faça o cadastro de perguntas
                    </Heading>

                    <Controller control={control}
                        name='question'
                        render={({ field : { onChange }}) => (
                            <Input placeholder="Pergunta" onChangeText={onChange} errorMessage={errors.question?.message}
                            InputLeftElement={<Icon as={<ClipboardText/>} size={16} ml='2' color="muted.400"/>} />
                        )}
                    />

                    <Button title="Logar" onPress={handleSubmit(handelSubmitQuestion)}
                    leftIcon={<Icon as={<CheckSquare/>} size={16} color="muted.400"/>} />
                </Center>
            </VStack>
            </LinearGradient>
        </NativeBaseProvider>
    );
}
