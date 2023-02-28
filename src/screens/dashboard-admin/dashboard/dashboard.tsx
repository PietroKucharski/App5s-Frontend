import { Center, NativeBaseProvider, VStack, ScrollView, Heading, Image, Pressable } from "native-base";
import { Button } from "../../../components/Button";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from "../../../contexts/Auth";

export default function DashboardAdmin({ navigation }: any) {
    const img = require('../../../images/LogoKrah.png');
    const { handleSignOut } = useAuth();

    function signOut() {
      handleSignOut();
    }

    return (
      <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Center>
              <Image alt='Logo Krah' source={img} size={150} mt={'75px'} />
              <Heading mt={'30px'} mb={'40px'}>Escolha uma opção</Heading>
            </Center>
          
            <VStack flex={1} px={5}>
              <Center>
                <Button title='Realizar auditoria' mb={3}/>
                <Button title='Trocar tipo de acesso do usuário' mb={3} onPress={() => navigation.navigate('Permissao')}/>
                <Button title='Cadastro de usuário' mb={3} onPress={() => navigation.navigate('SignUp')}/>
                <Button title='Cadastro de checklist' mb={3} onPress={() => navigation.navigate('Checklist')}/>
                <Button title='Consulta de checklist' mb={3} onPress={() => navigation.navigate('ChecklistConfer')}/>
                <Button title='Cadastro de perguntas' mb={3} onPress={() => navigation.navigate('Question')}/>
                <Button title='Consulta de perguntas' mb={3} onPress={() => navigation.navigate('QuestionConfer')}/>
                <Button title='Cadastro de checklist/perguntas' mb={3} onPress={() => navigation.navigate('ChecklistQuestion')}/>
                <Button title='Cadastro de áreas' mb={3} onPress={() => navigation.navigate('Area')}/>
                <Button title='Sair da conta' mb={3} bg={'red.400'} _pressed={{bgColor: 'red.500'}} onPress={signOut}/>
              </Center>
            </VStack>
          </ScrollView>
          <StatusBar style="auto" />
        </LinearGradient>
      </NativeBaseProvider>
    );
}
