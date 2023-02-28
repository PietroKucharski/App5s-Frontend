import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const url = 'http://192.168.100.171:3000/';

export function authLogin(email: string, password: string) {
    const response = axios({
        baseURL: url + 'auth/login',
        method: "POST",
        data: {
            email,
            password
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        }
    });
    return response;
}

export function createUsers(name: string, email: string, password: string) {
    const response = axios({
        baseURL: url + 'users/',
        method: "POST",
        data: {
          name,
          password,
          email
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return response
}

export async function createChecklists(name: string) {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'checklists/',
        method: 'POST',
        data: {
            name
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function getChecklists() {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'checklists/',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function createQuestions(question: string) {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'questions/',
        method: 'POST',
        data: {
            question
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function getQuestions() {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'questions/',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function createChecklistQuestions(checklist: any[]) {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'checklists-questions/',
        method: 'POST',
        data: {
            checklist
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function createAreas(description: string) {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'areas/',
        method: 'POST',
        data: {
            description
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}

export async function createAudits(name: string) {
    const token = await AsyncStorage.getItem('token')
    const response = axios({
        baseURL: url + 'checklists/',
        method: 'POST',
        data: {
            name
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response
}
