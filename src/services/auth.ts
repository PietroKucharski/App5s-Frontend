import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'http://192.168.100.209:3000/'


export default function signIn(email: string, password: string) {
    return axios({
        baseURL: url + 'auth/login',
        method: "POST",
        timeout: 1000,
        data: {
            password,
            email
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    // if(response) {
    //     return AsyncStorage.setItem('token', JSON.stringify(response));
    // }else {
    //     console.log("error");
    // }
}