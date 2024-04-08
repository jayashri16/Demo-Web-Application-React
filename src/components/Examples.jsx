import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from './TabButton'; 
import Section from'./Section';
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton =>"QUESTION","REVIEWS","NOTES"
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p> Pleace Select a Topic</p>;
  if(selectedTopic){
    tabContent=(
        <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p> {EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code> {EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
    );
  }

  return (
    <Section titles="Examples " id="examples">
      <h2>ABOUT THIS COURSE</h2>
      <p>
        The React course offers a comprehensive journey into the world of
        front-end development, providing a structured curriculum designed to
        equip learners with the skills and knowledge necessary to become
        proficient React developers.
      </p>
      <menu>
        <TabButton
          isSelected={selectedTopic === "QUESTION"}
          onClick={() => handleSelect("QUESTION")}
        >
          QUESTION
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "REVIEWS"}
          onClick={() => handleSelect("REVIEWS")}
        >
          REVIEWS
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "NOTES"}
          onClick={() => handleSelect("NOTES")}
        >
          NOTES
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
