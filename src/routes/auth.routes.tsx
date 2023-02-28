import React  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingIn from "../screens/home/login/SignIn";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={SingIn} options={{headerShown:false}}/>
        </AuthStack.Navigator>
    );
}