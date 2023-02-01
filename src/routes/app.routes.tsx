import React from 'react';
import Register from '../screens/register/register';
// import DashboardAdmin from '../screens/dashboard_admin';
// import CadastroPerguntas from '../screens/perguntas';
// import CheckList from '../screens/checklist';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ChecklistConsulta from '../screens/checklist-consulta';
// import ConsultaPerguntas from '../screens/perguntas-consulta';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
    <AppStack.Navigator >
        {/* <AppStack.Screen name='DashboardAdmin' component={DashboardAdmin} options={{headerShown:false}}/> */}
        <AppStack.Screen name='Register' component={Register} options={{headerShown:false}}/>
        {/* <AppStack.Screen name='Perguntas' component={CadastroPerguntas} options={{headerShown:false}}/> */}
        {/* <AppStack.Screen name='Checklist' component={CheckList} options={{headerShown:false}}/> */}
        {/* <AppStack.Screen name='Consulta Checklist' component={ChecklistConsulta} options={{headerShown:false}}/> */}
        {/* <AppStack.Screen name='Consulta Perguntas' component={ConsultaPerguntas} options={{headerShown:false}}/> */}
    </AppStack.Navigator>
    )
}