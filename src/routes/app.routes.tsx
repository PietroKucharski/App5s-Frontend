import React  from "react";
import CheckList from "../screens/dashboard-admin/checklist/Checklist";
import ChecklistConfer from "../screens/dashboard-admin/checklist-confer/Checklist-Confer";
import Area from "../screens/dashboard-admin/area/Area";
import ChecklistQuestion from "../screens/dashboard-admin/checklist-question/Checklist-Question";
import SignUp from "../screens/home/register/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/Auth";
import DashboardAdmin from "../screens/dashboard-admin/dashboard/Dashboard";
import Question from "../screens/dashboard-admin/question/Question";
import QuestionsConfer from "../screens/dashboard-admin/question-confer/QuestionConfer";


const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    // const { user } = useAuth();

    // if(user?.role == 1) {
    //     console.log(user.role)
    //     return(
    //         <AppStack.Navigator>
    //             Tela de usuário
    //         </AppStack.Navigator>
    //     )
    // }

    return(
        <AppStack.Navigator>
            <AppStack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{headerShown:false}}/>
            <AppStack.Screen name="Checklist" component={CheckList} options={{headerShown:false}}/>
            <AppStack.Screen name="ChecklistConfer" component={ChecklistConfer} options={{headerShown:false}}/>
            <AppStack.Screen name="Question" component={Question} options={{headerShown:false}}/>
            <AppStack.Screen name="QuestionConfer" component={QuestionsConfer} options={{headerShown:false}}/>
            <AppStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
            <AppStack.Screen name="Area" component={Area} options={{headerShown:false}}/>
            <AppStack.Screen name="ChecklistQuestion" component={ChecklistQuestion} options={{headerShown:false}}/>
        </AppStack.Navigator>
    )


}
