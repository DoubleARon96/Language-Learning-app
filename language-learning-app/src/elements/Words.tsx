import { useState, useEffect } from 'react';
import slovakEnglishWords from '../assets/json/english-to-slovak.json';

type WordEntry ={
    english : string;
    slovak : string; 
};

type WordMap = Record<string, WordEntry>;
//this function  shuffles the random words
function getRandomItems<T>(arr: T[], count: number): T[] {
const shuffled = [...arr].sort(()=> 0.5 - Math.random());
return shuffled.slice(0, count);
}

function WordQuiz(){
    const [question, setQuestion] = useState<WordEntry | null>(null);
    const [options, setOptions] = useState<WordEntry[]>([]);
    const [selected, SetSelected] = useState<WordEntry | null>(null);
}

function Words(){
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
}
export default Words;