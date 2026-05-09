import { useLanguage } from "../context/LanguageContext";
import slovakEnglishWords from '../assets/json/english-to-slovak.json';
import norwegianEnglishWords from '../assets/json/english-to-norwegian.json';

function LanguageButton() {
  const { setSelectedWords, setSelectedLanguage } = useLanguage();
  function handleLanguageChange(language: string) {
    if (language === 'slovak') {
      setSelectedWords(slovakEnglishWords);
      setSelectedLanguage('slovak');
    } else if (language === 'norwegian') {
      setSelectedWords(norwegianEnglishWords);
      setSelectedLanguage('norwegian');
    } else {
      setSelectedWords(null);
      setSelectedLanguage(null);
    }
  }

  return (
    <div>
      <ul className="language-buttons">
        <li className="language-button-items"><button onClick={() => handleLanguageChange('slovak')}>Slovak</button></li>
        <li className="language-button-items"><button onClick={() => handleLanguageChange('norwegian')}>Norwegian</button></li>
        <li className="language-button-items"><button onClick={() => handleLanguageChange('clear')}>Clear</button></li>
      </ul>
    </div>
  );
}

export default LanguageButton;