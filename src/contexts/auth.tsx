import React, { createContext, useEffect, useState, useContext } from 'react'
import * as auth from '../services/auth'

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
    role_types: number;
}
interface AuthContextData {
    signed: boolean,
    handleSignIn(email: string, password: string): Promise<void>,
    handleSignOut(): void,
    loading: boolean,
    user: User | null,
}

type Props = {
    children?: React.ReactNode
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('user'); 
            const storageToken = await AsyncStorage.getItem('token');
            setLoading(false);

            if(storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        loadStorageData();
    }, [])

    async function handleSignIn(email: string, password: string) {
        const response = await auth.authLogin(email, password);
        setUser(response.data.userData)

        await AsyncStorage.setItem('user', JSON.stringify(response.data.userData)); 
        await AsyncStorage.setItem('token', response.data.token.accessToken);
        console.log(response.headers)
    }

    function handleSignOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, handleSignIn, handleSignOut, }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context
};