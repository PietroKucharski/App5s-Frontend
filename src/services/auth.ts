import axios from 'axios';

const url = 'http://192.168.100.209:3000/';

export function authLogin(email: string, password: string) {
    const response = axios({
        baseURL: url + 'auth/login',
        method: "POST",
        timeout: 10000,
        data: {
            email,
            password
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return response;
}

export function authRegister(name: string, email: string, password: string) {
    const response = axios({
        baseURL: url + 'auth/register',
        method: "POST",
        timeout: 1000,
        data: {
          name,
          password,
          email
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    return response

}