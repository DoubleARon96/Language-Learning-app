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
  };

  if (!selectedWords || !selectedLanguage) {
    return <div>Please select a language to start the quiz.</div>;
  }

  return (
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
);}
export default WordQuiz;