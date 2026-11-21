import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js';
import TipsAndHints from './elements/Tricks-and-hint.tsx';
import Home from './elements/Home';
import LanguageButton from './elements/LanguageButton.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import './App.css';
import './assets/css/styles.css';
import ReadingTests from './elements/ReadingTests.tsx';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>

        {/* ⭐ Menu appears on ALL pages */}
        <Menu />

        {/* Optional: also appears everywhere */}
        <LanguageButton />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-game" element={<Words />} />
          <Route path="/crossword" element={<div>Crossword Page Is under Construction</div>} />
          <Route path="/reading-tests" element={<ReadingTests />} />
          <Route path="/tips-and-hints" element={<TipsAndHints />} />
        </Routes>

      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
