import { useLanguage } from "../context/LanguageContext";
import slovakEnglishWords from '../assets/json/english-to-slovak.json';
import norwegianEnglishWords from '../assets/json/english-to-norwegian.json';

function LanguageButton() {
  const { selectedWords, setSelectedWords } = useLanguage();

  function handleLanguageChange(language: string) {
    if (language === 'slovak') {
      setSelectedWords(slovakEnglishWords);
    } else if (language === 'norwegian') {
      setSelectedWords(norwegianEnglishWords);
    } else {
      setSelectedWords(null);
    }
  }

  return (
    <div>
      <ul>
        <li><button onClick={() => handleLanguageChange('slovak')}>Slovak</button></li>
        <li><button onClick={() => handleLanguageChange('norwegian')}>Norwegian</button></li>
        <li><button onClick={() => handleLanguageChange('clear')}>Clear</button></li>
      </ul>
    </div>
  );
}

export default LanguageButton;