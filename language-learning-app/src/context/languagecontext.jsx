import { createContext, useState } from 'react';

export const languageContext = createContext();

export function languageProvider({ children }) {
    const [selectedwords, setSelectedWords] = useState(null);
    return (
        <languageContext.Provider value={{ selectedwords, setSelectedWords }}>
            {children}
        </languageContext.Provider>
    );
}