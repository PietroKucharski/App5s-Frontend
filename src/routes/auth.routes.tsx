import React  from "react";
import Register from "../screens/home/register/register";
import Login from "../screens/home/login/login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login}/>
        </AuthStack.Navigator>
    );
}