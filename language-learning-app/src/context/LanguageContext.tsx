import { createContext, useState, useContext } from "react";

type WordsData = any;//Replace later with proper type

interface LanguageContextType {
  selectedWords: WordsData | null;
  setSelectedWords: (value: WordsData | null) => void;

  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;

}
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedWords, setSelectedWords] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  return (
    <LanguageContext.Provider value={{
        selectedWords,
        setSelectedWords,
        selectedCategory,
        setSelectedCategory
      }}
>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
