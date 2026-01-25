import { createContext, useState } from 'react';

export const languageContext = createContext({
  selectedWords: null,
  setSelectedWords: (_value: any) => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedWords, setSelectedWords] = useState<any>(null);

  return (
    <languageContext.Provider value={{ selectedWords, setSelectedWords }}>
      {children}
    </languageContext.Provider>
  );
}
