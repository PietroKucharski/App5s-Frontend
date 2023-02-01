import React from 'react';
import Login from '../screens/login/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
    <AuthStack.Navigator >
        <AuthStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
    </AuthStack.Navigator>
    )
}