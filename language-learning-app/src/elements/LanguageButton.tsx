import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";
import slovakEnglishWords from '../assets/json/english-to-slovak.json';
import norwegianEnglishWords from '../assets/json/english-to-norwegian.json';

function LanguageButton() {
  type WordsData = typeof slovakEnglishWords | typeof norwegianEnglishWords;
  const {selectedWords, setSelectedWords} = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = selectedWords ? Object.keys(selectedWords) : [];

  return (
    <div>
      <ul>
        <li><button onClick={() => setSelectedWords(slovakEnglishWords)}>Slovak</button></li>
        <li><button onClick={() => setSelectedWords(norwegianEnglishWords)}>Norwegian</button></li>
        <li><button onClick={() => setSelectedWords(null)}>Clear</button></li>
      </ul>
      {selectedWords && (
        <ul>
          {Object.keys(selectedWords).map(category => (
            <li key={category}>
              <button onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>The selected language is: {selectedWords ? Object(selectedWords)[0] : "None"}</p>
      <p>Category selected is : {selectedCategory ? selectedCategory : "None"} </p>
    </div>

  );
}
export default LanguageButton;