import React, { useState } from "react";
import "./index.css";
import DropDown from "./Components/DropDown";

const App = () => {
  const options = [
    {
      label: "Machine Learning",
      value: "ml",
    },
    {
      label: "Data Structures",
      value: "dsa",
    },
    {
      label: "Java",
      value: "jv",
    },
    {
      label: "Python",
      value: "py",
    },
  ];

  const [course, setCourse] = useState(options[0]);
  return (
    <div className='header'>
      <h1>What are you skilled in ?</h1>
      <DropDown
        selected={course}
        onSelectedChange={setCourse}
        options={options}
        label='Select a course'
      />
    </div>
  );
};

export default App;
