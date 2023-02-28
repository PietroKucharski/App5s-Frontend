
import React, { useEffect, useState } from 'react';
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image, Box, FlatList, Text, Container} from "native-base";
import { Button } from "../../../components/Button";
import { MagnifyingGlass, CheckSquare } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { getChecklists } from '../../../services/Auth';
import Cards from '../../../components/cards/Card';

export default function Checklist() {
  const img = require('../../../images/LogoKrah.png');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  

  async function getChecklist() {
    const response = await getChecklists()

    setData(response.data)
    
  }

  function renderItem({item}: any) {
    return (
      <Box height={20} width={300}>
        <Cards value={item.name}/>
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
                  Consulta de checklist
              </Heading>

      
              <FlatList data={data} renderItem={renderItem} borderWidth={1} w={350} paddingLeft={5} paddingTop={4}/>

              <Button title="Consultar" onPress={getChecklist} leftIcon={<Icon as={<MagnifyingGlass/>} size={16} color="muted.400"/>} mt={'50px'} mb={'50px'}/>
            </Center>
        </VStack>
      </LinearGradient>
    </NativeBaseProvider>
  );
}
