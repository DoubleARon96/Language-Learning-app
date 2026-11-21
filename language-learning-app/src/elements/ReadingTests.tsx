import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { stories } from "../assets/json/stories.json";

export default function ReadingTests() {
  // Get the selected language from the context
  const { selectedLanguage } = useLanguage();
  // State to keep track of the currently selected story
  const [currentStory, setCurrentStory] = useState<string | null>(null);
  // If no language is selected, prompt the user to select one
  if (!selectedLanguage) {
    return <div>Please select a language</div>;
  }
  // Get the stories for the selected language and level
  const storyLevelA1 =
  stories[selectedLanguage]["level-a1"];
  // Get the available story choices for the selected language and level
  const storyChoices = Object.keys(storyLevelA1);
  // Get the data for the currently selected story
  const selectedStory = currentStory
    ? storyLevelA1[
        currentStory as keyof typeof storyLevelA1
      ]
    : null;
      // Get the story data for the selected language
  const storyData = selectedStory?.[selectedLanguage];

  return (
    <section className="readingtest">
      <div>
        <h2>Choose a Story</h2>

        <ul>
          {storyChoices.map((choice) => (
            <li key={choice}>
              <button
                onClick={() => setCurrentStory(choice)}
              >
                {choice}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {storyData && (
        <div className="story-content">
          <h3>{storyData.title}</h3>

          <p>{storyData.content[0]}</p>

          {selectedStory.english && (
            <>
              <h4>English Translation</h4>
              <p>{selectedStory.english[0]}</p>
            </>
          )}
        </div>
      )}
    </section>
  );
}