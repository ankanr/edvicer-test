import React, { useState } from "react";
import "./index.css";
import DropDown from "./Components/DropDown";
import options from "./options/options";
import choices from "./options/choices";
import RenderCourses from "./Components/RenderCourses";
import RenderSubjects from "./Components/RenderSubjects";
import Done from "./Components/Done";

const App = () => {
  const [choice, setChoice] = useState(choices[0]);

  const [subjectList, setSubjectList] = useState([]);

  const [results, setResults] = useState([]);

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

      <div className='done'>
        <Done
          subjects={subjectList}
          onChangeResult={setResults}
          results={results}
        />
      </div>
      <div className='result'>
        {results.slice(0, results.length - 1).map((result, index) => {
          if (result.course === "" || result.sub === "") return null;
          return (
            <div className='data' key={index}>
              Course : {result.course}, Subject: {result.sub}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
