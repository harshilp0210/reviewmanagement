import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize auth state from localStorage
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const session = localStorage.getItem('reviewmanager_session');
                if (session) {
                    const { email } = JSON.parse(session);
                    const users = JSON.parse(localStorage.getItem('reviewmanager_users') || '{}');

                    if (users[email]) {
                        setUser(users[email]);
                    } else {
                        // Session references invalid user
                        localStorage.removeItem('reviewmanager_session');
                    }
                }
            } catch (error) {
                console.error('Auth initialization error:', error);
                localStorage.removeItem('reviewmanager_session');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));

            // Demo account bypass
            if (email === 'demo@reviewmanager.com' && password === 'demo123') {
                const demoUser = {
                    id: 'demo-user',
                    name: 'Demo User',
                    email: 'demo@reviewmanager.com',
                    businessName: 'Sunset Motel',
                    avatar: null,
                    plan: 'Professional',
                    locations: 3
                };
                setUser(demoUser);
                localStorage.setItem('reviewmanager_session', JSON.stringify({ email }));
                return true;
            }

            const users = JSON.parse(localStorage.getItem('reviewmanager_users') || '{}');
            const user = users[email];

            if (!user) {
                throw new Error('User not found');
            }

            // Simple hash check (in production use bcrypt)
            const passwordHash = btoa(password); // Simple base64 for demo
            if (user.passwordHash !== passwordHash) {
                throw new Error('Invalid password');
            }

            setUser(user);
            localStorage.setItem('reviewmanager_session', JSON.stringify({ email }));
            return true;

        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (email, password, businessData) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const users = JSON.parse(localStorage.getItem('reviewmanager_users') || '{}');

            if (users[email]) {
                throw new Error('Email already registered');
            }

            const newUser = {
                id: crypto.randomUUID(),
                email,
                passwordHash: btoa(password), // Simple base64 for demo
                name: businessData.businessName, // Using business name as user name for now
                businessName: businessData.businessName,
                category: businessData.category,
                locations: businessData.locations,
                connectedPlatforms: businessData.connectedPlatforms,
                plan: 'Free Trial',
                createdAt: new Date().toISOString()
            };

            // Save user
            users[email] = newUser;
            localStorage.setItem('reviewmanager_users', JSON.stringify(users));

            // Auto login
            setUser(newUser);
            localStorage.setItem('reviewmanager_session', JSON.stringify({ email }));

            return true;
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('reviewmanager_session');
    };

    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
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
