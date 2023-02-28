import * as yup from 'yup'
import React from 'react';
import { Center, Heading, Icon, Image, NativeBaseProvider, Pressable, VStack } from "native-base";
import { Button } from "../../../components/Button";
import  { Input } from '../../../components/Input';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { User, Envelope, Key, SignIn, Eye, EyeSlash } from 'phosphor-react-native'
import { createUsers } from '../../../services/Auth';

type FormDataProps = {
    name: string
    email: string
    password: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe o senha').min(6, 'A senha tem que ter pelo menos 6 digítos'),
})

export default function SignUp() {
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });
    const [showPassword, setShowPassword] = React.useState(false);
    const img = require('../../../images/LogoKrah.png');

    async function handelSingUp(data: FormDataProps) {
        await createUsers(data.name, data.email, data.password)
    }

    return (
        <NativeBaseProvider>
            <VStack flex={1} px={5}>
                <Center h='full'>
                    
                    <Image alt='Logo Krah' source={img} size={150}/>
                    <Heading mb={'50px'} mt={'50px'}>
                        Faça o cadastro de uma conta
                    </Heading>

                    <Controller control={control}
                        name='name'
                        render={({ field : { onChange }}) => (
                            <Input placeholder="Nome" onChangeText={onChange} errorMessage={errors.name?.message}
                            InputLeftElement={<Icon as={<User/>} size={16} ml='2' color="muted.400"/>}/> 
                        )}
                    />

                    <Controller control={control}
                        name='email'
                        render={({ field : { onChange }}) => (
                            <Input placeholder="Email" onChangeText={onChange} errorMessage={errors.email?.message}
                            InputLeftElement={<Icon as={<Envelope/>} size={16} ml='2' color="muted.400"/>}/>
                        )}
                    />

                    <Controller control={control}
                        name='password'
                        render={({ field : { onChange }}) => (
                            <Input placeholder="Senha" onChangeText={onChange} errorMessage={errors.password?.message}
                            InputLeftElement={<Icon as={<Key/>} size={16} ml='2' color="muted.400"/>} type={showPassword ? 'text' : 'password'}
                            InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}>
                                <Icon as={showPassword ? <Eye/> : <EyeSlash/>} size={16} mr='3' color='muted.400'/> 
                            </Pressable>}/>
                        )}
                    />
                    <Button title="Cadastrar" onPress={handleSubmit(handelSingUp)}
                    leftIcon={<Icon as={<SignIn/>} size={16} color="muted.400"/>}/>
                </Center>
            </VStack>
        </NativeBaseProvider>
    );
}
