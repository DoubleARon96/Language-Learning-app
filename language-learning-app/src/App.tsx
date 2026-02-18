import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js';
import LanguageButton from './elements/LanguageButton.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import './App.css';



function App() {
  

  return (
     <LanguageProvider>
      <div>
        <Menu />
      </div>
      <div>
        <LanguageButton />
      </div>

      <div>
        <Words />
      </div>
    </LanguageProvider>
  );
}

export default App
