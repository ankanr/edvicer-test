import React, { useState } from "react";
import "./index.css";
import DropDown from "./Components/DropDown";
import options from "./options/options";
import choices from "./options/choices";
import RenderCourses from "./Components/RenderCourses";
import RenderSubjects from "./Components/RenderSubjects";
// import ShowMore from "./Components/ShowMore";

const App = () => {
  const [choice, setChoice] = useState(choices[0]);

  const [subjectList, setSubjectList] = useState([]);
  const [limitTo, setLimitTo] = useState(10);
  const onLoadMore = () => {
    setLimitTo(limitTo + 10);
  };
  const countCourse = () => {
    options.map((option) => {
      let count = 0;
      subjectList.map((subject) => {
        if (option.sub.includes(subject)) {
          count++;
        }
        return null;
      });
      option.count = count;
      return null;
    });
  };

  countCourse();

  return (
    <div className='container'>
      <h1>What are you skilled in ?</h1>
      <DropDown
        selected={choice}
        onSelectedChange={setChoice}
        choices={choices}
        label='Search for and select your skills below'
        subjectList={subjectList}
        setSubjectList={setSubjectList}
        onLoadMore={onLoadMore}
      />
      <RenderCourses
        options={options}
        selected={choice}
        onSelectedChange={setChoice}
      />
      <RenderSubjects
        options={options}
        selected={choice}
        subjectList={subjectList}
        setSubjectList={setSubjectList}
        onLoadMore={onLoadMore}
        limitTo={limitTo}
      />
    </div>
  );
};

export default App;
