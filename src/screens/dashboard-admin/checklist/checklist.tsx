import * as yup from 'yup'
import React from 'react';
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image } from "native-base";
import { Button } from "../../../components/Button";
import  { Input } from '../../../components/Input';
import {  Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { ClipboardText, CheckSquare } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { createChecklists } from '../../../services/Auth';

type FormDataProps = {
    checklist: string
}

const checklistSchema = yup.object({
    email: yup.string().required('Informe o email'),
})

export default function Checklist() {
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(checklistSchema) });
    const img = require('../../../images/LogoKrah.png');

    async function handelSubmitChecklist(data: FormDataProps) {
        const response = await createChecklists(data.checklist)
        return response
    }

    return (
        <NativeBaseProvider>
            <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
            <VStack flex={1} px={4}>
                <Center h='full'>
                    <Image alt='Logo Krah' source={img} size={150} mb={'50px'}/>
                    <Heading mb={'50px'}>
                        Faça o cadastro de um checklist
                    </Heading>
                    
                    <Controller control={control}
                        name='checklist'
                        render={({ field : { onChange }}) => (
                            <Input placeholder="Checklist" onChangeText={onChange} errorMessage={errors.checklist?.message}
                            InputLeftElement={<Icon as={<ClipboardText/>} size={16} ml='2' color="muted.400"/>} />
                        )}
                    />

                    <Button title="Logar" onPress={handleSubmit(handelSubmitChecklist)}
                    leftIcon={<Icon as={<CheckSquare/>} size={16} color="muted.400"/>} />
                </Center>
            </VStack>
            </LinearGradient>
        </NativeBaseProvider>
    );
}
