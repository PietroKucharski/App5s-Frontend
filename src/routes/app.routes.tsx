import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import DashboardAdmin from "../screens/dashboard-admin/dashboard/dashboard";
import CheckList from "../screens/dashboard-admin/checklist/checklist";
import Register from "../screens/home/register/register";
import ChecklistConfer from "../screens/dashboard-admin/checklist-confer/checklist-confer";
import Question from "../screens/dashboard-admin/question/question";
import QuestionConfer from "../screens/dashboard-admin/question-confer/question-confer";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{headerShown:false}}/>
            <AppStack.Screen name="Checklist" component={CheckList} options={{headerShown:false}}/>
            <AppStack.Screen name="ChecklistConfer" component={ChecklistConfer} options={{headerShown:false}}/>
            <AppStack.Screen name="Question" component={Question} options={{headerShown:false}}/>
            <AppStack.Screen name="QuestionConfer" component={QuestionConfer} options={{headerShown:false}}/>
            <AppStack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </AppStack.Navigator>
    );
}
