import React, { useState } from "react";
import { createContext} from "react";
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object;
    signIn(email: string, password: string): Promise<void>;
}

type Props = {
    children?: React.ReactNode
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ( {children} ) => {
    const [user, setUser] = useState({});

    async function signIn(email: string, password: string) {
        const response = await auth.default(email, password)
        setUser(response.request)
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;