import React, { createContext } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = {displayName: 'Sagor Nodi'}
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;