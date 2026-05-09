import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js';
import LanguageButton from './elements/LanguageButton.tsx';
import { useLanguage } from "./context/LanguageContext";
import { LanguageProvider } from './context/LanguageContext.tsx';
import slovakEnglishWords from "./assets/json/english-to-slovak.json";
import norwegianEnglishWords from './assets/json/english-to-norwegian.json';
import './App.css';
import './assets/css/styles.css';




function App() {
  type WordsData = typeof slovakEnglishWords | typeof norwegianEnglishWords;
 const { selectedWords } = useLanguage();


  return (
    <LanguageProvider>
      <head>
        <title>Language Learning App</title>
        <link rel="stylesheet" href="./assets/css/styles.css" />
      </head>
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
