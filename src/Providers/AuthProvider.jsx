import { createContext, useState } from "react";

export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const authInfo = {
        user,
        loading,
    }
    return (
        <AuthContex.Provider value = {authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;