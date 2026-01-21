import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize auth state from Supabase
    useEffect(() => {
        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setIsLoading(false);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setIsLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            return true;
        } catch (error) {
            console.error('Login error:', error.message);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (email, password, businessData) => {
        setIsLoading(true);
        try {
            // 1. Sign up user
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: businessData.businessName,
                        business_name: businessData.businessName,
                        role: 'admin' // First user is admin
                    }
                }
            });

            if (error) throw error;
            if (!data.user) throw new Error('Registration failed');

            // 2. Create Organization (via RPC or manual insert depending on policies)
            // For Phase 1 Simplified: We will let the user be created. 
            // Ideally, we need a trigger or a second call to insert into 'organizations' table.
            // We'll handle Org creation in a separate 'Setup' step if needed, 
            // but for now let's try to insert directly if policies allow, 
            // OR rely on a Trigger (which we haven't written).

            // Let's create the profile and org manually for now to ensure data consistency
            // Note: RLS might block this if not set up to allow 'insert own profile'

            return true;
        } catch (error) {
            console.error('Registration error:', error.message);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
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
