import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js';
import LanguageButton from './elements/LanguageButton.tsx';
import { useLanguage } from "./context/LanguageContext";
import { LanguageProvider } from './context/LanguageContext.tsx';
import './App.css';



function App() {
  const { selectedWords } = useLanguage();

  return (
    <LanguageProvider>
      <div>
        <Menu />
      </div>
      <div>
        <LanguageButton />
      </div>
      {selectedWords != null ? (
        <div>
          <h2>Please select a language to start the quiz.</h2>
        </div>
      ) : (
        <div>
          <Words />
        </div>)
      }

    </LanguageProvider>
  );
}

export default App
