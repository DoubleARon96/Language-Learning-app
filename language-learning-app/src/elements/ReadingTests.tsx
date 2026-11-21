import { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext.tsx";
import { stories } from "../assets/json/stories.json";

  const { selectedLanguage } = useLanguage();
 const [currentStory, setCurrentStory] = useState<string | null>(null);
  console.log("selectedLanguage", selectedLanguage);

function getStoryLanguage() {
  if (!selectedLanguage) {
  return null;
}else{
  return stories[selectedLanguage]
}
}
  let storySubjects: string[] = Object.keys(stories);
  if (!selectedLanguage) {
    throw new Error("No language selected");
  }
  const storyLevelA1 = stories[selectedLanguage]["level-a1"];
  const storychoice = storyLevelA1 ? Object.keys(storyLevelA1) : [];
  //const selectedStory = storyLevelA1[choice];
  

function getChooseStory() {
  if (!selectedLanguage) {
  return <div>Please select a language</div>;
  }else {
    return (

    <div>
      <h2>Choose a Story</h2>
      <ul>
        {storychoice.map((choice) => (
          <li key={choice}>
            <button onClick={() => setCurrentStory(choice)}>
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}
}


 
export default getChooseStory;