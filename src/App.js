import React, { useState } from "react";
import "./index.css";
import DropDown from "./Components/DropDown";
import options from "./options/options";
import choices from "./options/choices";
import RenderCourses from "./Components/RenderCourses";
import RenderSubjects from "./Components/RenderSubjects";

const App = () => {
  const [choice, setChoice] = useState(choices[0]);

  return (
    <div className='container'>
      <h1>What are you skilled in ?</h1>
      <DropDown
        className='dropdown'
        selected={choice}
        onSelectedChange={setChoice}
        choices={choices}
        label='Select a course'
      />
      <RenderSubjects options={options} choice={choice} />
      <RenderCourses options={options} choice={choice} />
    </div>
  );
};

export default App;
