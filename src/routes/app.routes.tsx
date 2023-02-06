import React  from "react";
import Register from "../screens/home/register/register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </AppStack.Navigator>
    );
}
