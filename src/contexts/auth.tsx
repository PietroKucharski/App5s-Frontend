import React from "react";
import { createContext} from "react";
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    signIn(): Promise<object>;
}

type Props = {
    children?: React.ReactNode
};


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ( {children} ) => {
    const email = ''
    const password = ''

    async function signIn(email: string, password: string) {
        const response = await auth.default(email, password)

        console.log(response);
    }
    return (
        <AuthContext.Provider value={{ signed: false, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;