import { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext.tsx";
import { stories } from "../assets/json/stories.json";

export const ReadingTests = () => {
  const { language } = useLanguage();
  const [currentStory, setCurrentStory] = useState(null);

}