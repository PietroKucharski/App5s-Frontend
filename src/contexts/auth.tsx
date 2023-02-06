import { AxiosResponse } from 'axios';
import React, { createContext, useState } from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
    signed: boolean,
    handleSignIn(email: string, password: string): Promise<AxiosResponse<any, any>>;
    handleSignOut(): void;
}

type Props = {
    children?: React.ReactNode
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    async function handleSignIn(email: string, password: string): Promise<AxiosResponse<any, any>> {
        const response = await auth.authLogin(email, password);
        setUser(response.data.accessToken)
        return await response.data.accessToken;
    }

    function handleSignOut() {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;