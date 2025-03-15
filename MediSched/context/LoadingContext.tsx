import { createContext, useState, useContext, ReactNode } from 'react';

const LoadingContext = createContext({} as {
    loading: boolean;
    setLoading: (loading: boolean) => void;
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);