import React, { createContext, useContext, useState, type ReactNode } from "react";


type User = {
  nome: string;
  email: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    loading: boolean;
    verifyLogin: () => string | null;
};



const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode     }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const verifyLogin = () =>{
        return localStorage.getItem('isLogin')       
    }

    const login = async (email: string, password: string) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUser({
        nome: "Willian Gustavo",
        email,
        });
        setLoading(false);

        localStorage.setItem('isLogin', 'true')

        return true
    };

    const logout = () => {
        setUser(null);
        localStorage.clear()
    };

    return (
        <AuthContext.Provider
        value={{
            user,
            isAuthenticated: !!user,
            login,
            logout,
            loading,
            verifyLogin
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);