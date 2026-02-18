import { useState } from 'react';
import slovakEnglishWords from '../assets/json/english-to-slovak.json';
import norwegianEnglishWords from '../assets/json/english-to-norwegian.json';

function LanguageButton(){
    type WordsData = typeof slovakEnglishWords | typeof norwegianEnglishWords;

    const [selectedWords, setSelectedWords] = useState<WordsData |null>(null);
    
  return(
<div>
      <ul>
        <li><button onClick={()=> setSelectedWords(slovakEnglishWords)}>Slovak</button></li>
        <li><button onClick={()=> setSelectedWords(norwegianEnglishWords)}>Norwegian</button></li>
        <li><button onClick={()=> setSelectedWords(null)}>Clear</button></li>
      </ul>
      {selectedWords && (<pre>{JSON.stringify(selectedWords, null, 2)}</pre>
    )}
    </div>

);
}
export default LanguageButton;