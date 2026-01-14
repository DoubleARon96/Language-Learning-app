import { useState, useEffect } from 'react';
import slovakEnglishWords from '../assets/json/english-to-slovak.json';
import norwegianEnglishWords from '..assets/json/english-to-norwegian.json';
//this defines the shape of a data object in type script
type WordEntry = {
  english: string;
  slovak: string;
  norwegian: string;
};
// this makes wordmap have a set data as a string and that string will be from word entry
type WordMap = Record<string, WordEntry>;
/**
 * the T lets it accept any type
 * [...arr] makes a copy of the array so the original isnt mutated.
 *  .sort(() => 0.5 - Math.random()) this randomly sorts the array

*/
function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function WordQuiz() {
    // this sets the correct answer
  const [question, setQuestion] = useState<WordEntry | null>(null);
    // this sets all the options and 1 will be correct
  const [options, setOptions] = useState<WordEntry[]>([]);
    // this tracks the user options and updates the answer
  const [selected, setSelected] = useState<WordEntry | null>(null);

  /**
   * - useEffect(...) is a React hook for running side effects (like fetching data, setting up timers, or initializing state).
   * generateQuestion() is your custom function that sets up the quiz question and options.

   */
  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    //gets the words
    const allWordsslovak: WordEntry[] = Object.values(slovakEnglishWords);
    const allWordsnorwegian: WordEntry[] = Object.values(norwegianEnglishWords);
    //choses the correct one
    const allEnglishKeys = Object.keys(slovakEnglishWords);
    const randomKey = allEnglishKeys[Math.floor(Math.random() * allEnglishKeys.length)];
    const correct:WordEntry = {
        english: randomKey,
        slovak : slovakEnglishWords[randomKey].slovak,
        norwegian: norwegianEnglishWords[randomKey].norwegian};
    const others = getRandomItems(
      allWordsslovak.filter((w) => w.english !== correct.english),
      3
    );
    //shuffles the options
    const shuffledOptions = getRandomItems([correct, ...others], 4);

    setQuestion(correct);
    setOptions(shuffledOptions);
    setSelected(null);
  };

  //resets the questions after
  const handleSelect = (option: WordEntry) => {
    setSelected(option);
  };

  return (
    <div className='container'>
        <div className='lang-choices'>

        </div>
      <h2>What is the Slovak word for: <em>{question?.english}</em>?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            style={{
              backgroundColor:
                selected === null
                  ? ''
                  : opt.slovak === question?.slovak
                  ? 'lightgreen'
                  : selected === opt
                  ? 'salmon'
                  : '',
            }}
          >
            {opt.slovak}
          </button>
        ))}
      </div>
      {selected && (
        <div style={{ marginTop: '1rem' }}>
          {selected.slovak === question?.slovak ? '✅ Correct!' : '❌ Try again.'}
          <br />
          <button onClick={generateQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}

export default WordQuiz;

/*function Words(){
    const conjoiningWords = slovakEnglishWords.conjoining_words;
    return(
        <div>
            {Object.entries(conjoiningWords).map(([key, value])=>(
                <div key ={key}>
                    <strong>{value.english}</strong>-{value.slovak}
                </div>
            ))}
        </div>
    );
}*/