import { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext.tsx";

// Types
type WordEntry = {
  english: string | string[];
  slovak?: string | string[];
  norwegian?: string | string[];
};

type WordMap = Record<string, WordEntry>;

// Utility: get random items
function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function WordQuiz() {
  const { selectedWords, selectedLanguage } = useLanguage();

  const [correctCount, setCorrectCount] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([]);

  const [question, setQuestion] = useState<WordEntry | null>(null);
  const [options, setOptions] = useState<WordEntry[]>([]);
  const [selected, setSelected] = useState<WordEntry | null>(null);

  // Normalize a word so english/slovak/norwegian are always single strings
  const normalizeWord = (word: WordEntry): WordEntry => {
    const pickOne = (value: string | string[] | undefined) =>
      Array.isArray(value)
        ? value[Math.floor(Math.random() * value.length)]
        : value ?? '';

    return {
      ...word,
      english: pickOne(word.english),
      slovak: pickOne(word.slovak),
      norwegian: pickOne(word.norwegian),
    };
  };

  // Generate a new question
  const generateQuestion = () => {
    if (!selectedWords) return;

    // Flatten and normalize all words
    const allWords: WordEntry[] = Object.values(selectedWords)
      .flatMap((category) => Object.values(category as WordMap))
      .map(normalizeWord);

    // Pick correct answer
    const correct = allWords[Math.floor(Math.random() * allWords.length)];

    // Pick 3 incorrect answers
    const others = getRandomItems(
      allWords.filter((w) => w !== correct),
      3
    );

    // Shuffle all options
    const shuffledOptions = getRandomItems([correct, ...others], 4);

    // Update state
    setQuestion(correct);
    setOptions(shuffledOptions);
    setSelected(null);
  };

  // Regenerate question when selectedWords changes
  useEffect(() => {
    generateQuestion();
  }, [selectedWords]);

  const handleSelect = (option: WordEntry) => {
    setSelected(option);
    setQuestionsAnswered(prev => prev + 1);
    setWrongWords(wrongWords => option[selectedLanguage as keyof WordEntry] !== question?.[selectedLanguage as keyof WordEntry]
      ? [...wrongWords, option]
      : wrongWords
    );
    
     /**this if condition checks that the selected option
      is not a null first and then checks if the selected
      option is equal to the question's answer in the selected language.
       this also checks if the language is selected too. */
    const isCorrect = option[selectedLanguage as keyof WordEntry] === question?.[selectedLanguage as keyof WordEntry];
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  if (!selectedWords || !selectedLanguage) {
    return <div>Please select a language to start the quiz.</div>;
  }

  return (
    <section>
      <div>
        <h2>
          What is the word for: <em>{question?.english}</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(opt)}
              style={{
                backgroundColor:
                  selected === null
                    ? ''
                    : opt[selectedLanguage] === question?.[selectedLanguage]
                      ? 'lightgreen'
                      : selected === opt
                        ? 'salmon'
                        : '',
              }}
            >
              {opt[selectedLanguage]}
            </button>
          ))}
        </div>

        {selected && (
          <div style={{ marginTop: '1rem' }}>
            {selected[selectedLanguage] === question?.[selectedLanguage]
              ? '✅ Correct!'
              : '❌ Try again.'}
            <br />
            <button onClick={generateQuestion}>Next</button>
          </div>
        )}
      </div>
      <div className="word-quiz-counter">
        <p className="button">Correct Answers: {correctCount}</p>
        <p className="button">Wrong Answers: {questionsAnswered - correctCount}</p>
        <p className="button">Total Questions: {questionsAnswered}</p>
      </div>
         if (wrongWords.length === 0) {
      <div className="wrong-words">
        <h3>Wrong Words Review</h3>
       
      </div>
}
    </section>
  );
}
export default WordQuiz;