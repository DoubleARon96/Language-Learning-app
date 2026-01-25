import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js';
import { LanguageProvider } from './context/languagecontext.tsx';
import './App.css';



function App() {
  

  return (
     <LanguageProvider>
      <div>
        <Menu />
      </div>

      <div>
        <Words />
      </div>
    </LanguageProvider>
  );
}

export default App
