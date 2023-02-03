import axios from 'axios';


const url = 'http://192.168.100.209:3000/'

export async function signIn(email: string, password: string) {
    const request = await axios({
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
    });

    return {request}
}

export default signIn;