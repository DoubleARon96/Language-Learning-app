import { useLanguage } from "../context/LanguageContext";
import data from "../assets/json/tips-and-ticks-data.json" with {type: "json"};
import { use } from "react";

console.log("useLanguage", useLanguage);

console.log("data", data);

const tableData = structuredClone(data);
const slovakData = tableData.slovak;
const norwegianData = tableData.norwegian;
const englishData = tableData.english


function getTipsFromVariable(data: any) {
    for (const tips of Object.values(data)) {

        
        console.log(tips)
    }
    return
}
getTipsFromVariable(slovakData)

function TipsAndHints() {
    return (
        <section>
            <div>
                <h2>Tips For Slovak</h2>
                <ul className="tipsAndHints">
                    {Object.values(slovakData).map((tiptext, i)=> (
                        <li key={i}>{tiptext}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Tips For English</h2>
                <ul className="tipsAndHints">
                    {Object.values(englishData).map((tiptext, i)=> (
                        <li key={i}>{tiptext}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
export default TipsAndHints