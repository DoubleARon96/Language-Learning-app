import { useLanguage } from "../context/LanguageContext";

console.log("useLanguage", useLanguage);


function tipsAndHints() {
    return (
        <div>
            <ul className="tipsAndHints">
                <li>Tip 1: Use context clues to understand new words.</li>
                <li>Tip 2: Practice speaking regularly to improve fluency.</li>
                <li>Tip 3: Read aloud to enhance pronunciation.</li>
            </ul>
        </div>

    );
}
export default tipsAndHints