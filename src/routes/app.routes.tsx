import React  from "react";
import DashboardAdmin from "../screens/dashboard-admin/dashboard/dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckList from "../screens/dashboard-admin/checklist/checklist";
import Register from "../screens/home/register/register";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{headerShown:false}}/>
            <AppStack.Screen name="Checklist" component={CheckList} options={{headerShown:false}}/>
            <AppStack.Screen name="Register" component={Register} options={{headerShown:false}}/>

        </AppStack.Navigator>
    );
}
