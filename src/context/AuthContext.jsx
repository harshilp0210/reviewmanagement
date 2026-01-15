import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulated user data
        setUser({
            id: '1',
            name: 'Demo User',
            email: email,
            business: 'Sunset Motel',
            avatar: null,
            plan: 'Professional',
            locations: 3
        });
        setIsLoading(false);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;
